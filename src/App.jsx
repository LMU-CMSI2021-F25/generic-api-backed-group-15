import { useState, useEffect } from "react";


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
        <img src={info} alt="Random dog" />
        <button onClick={fetchDog}>Get Dog</button>
    </div>
    )
}