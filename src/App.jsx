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
      <h1>🐕 DOG FINDER 🐕</h1>

      <div className="middle-section">
        {info && (
          <img
            className="dog-photo"
            src={info}
            alt="Random dog"
            style={{ opacity: loading ? 0.5 : 1 }}
          />
        )}
        <button
          className="get-dog-button"
          onClick={fetchDog}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get New Dog 🐾"}
        </button>

        <div className="dog-facts">
          {facts && facts.map((fact, index) => (
            <p key={index}>{fact}</p>
          ))}
        </div>
      </div>
    </>
  );
}