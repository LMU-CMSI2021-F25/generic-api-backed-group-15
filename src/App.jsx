import { useState, useEffect } from "react";
import './App.css';


export default function App() {
const [info, setInfo] = useState("");

const fetchDog = () => {
fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((response) => {
    setInfo(response.message);
    });
};

useEffect(() => {
    fetchDog();
}, []);

return (
    <div>
        <img className="dog-photo" src={info} alt="Random dog" />
        <button className="get-dog-button" onClick={fetchDog}>Get Dog</button>
    </div>
    )
}