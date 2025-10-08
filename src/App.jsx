import { useState, useEffect } from "react";
import './App.css';


export default function App() {
const [info, setInfo] = useState("");
const [facts, setFacts] = useState()

const fetchDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((response) => {
    setInfo(response.message);
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
    <div>
        <img className="dog-photo" src={info} alt="Random dog" />
        <p>{facts}</p>
        <button className="get-dog-button" onClick={fetchAPIS}>Get Dog</button>
    </div>
    )
}