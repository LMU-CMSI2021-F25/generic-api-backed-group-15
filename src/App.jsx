import { useState, useEffect } from "react";
import './App.css';


export default function App() {
const [info, setInfo] = useState("");
const [facts, setFacts] = useState();
const [loading, setLoading] = useState(false);

const fetchDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((response) => {
    setInfo(response.message);
    setLoading(false);
    });
};

const fetchFacts = () => {
    fetch("https://dogapi.dog/api/facts")
    .then((r) => r.json())
    .then((data) => {
        setFacts(data.facts);
    });
}

const fetchAPIS = () => {
    fetchDog();
    fetchFacts();
}

useEffect(() => {
    fetchAPIS();
}, []);

return (
  <>
    <h1>🐕 DOG FACTS & FINDER 🐕 </h1>

    <div className="middle-section">
        <img className="dog-photo" src={info} alt="Random dog" />
        <p className="facts">{facts}</p>
        <button 
        className="get-dog-button"
        onClick={fetchAPIS}
        disabled={loading}>
        {loading ? "Loading..." : "CLICK HERE: Get New Dog & Dog Fact! 🐾"}
        </button>

    </div>
    <footer>
      <p>Made by Group 15</p>
    </footer>
    </>
    )
}