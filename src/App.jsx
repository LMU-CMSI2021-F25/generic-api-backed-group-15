import { useState, useEffect } from "react";


export default function App() {
const [info, setInfo] = useState("");

useEffect(() => {
fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((response) => {
    setInfo(response.message);
    });
}, []);

return (
    <div>
        <img src={info} alt="Random dog" />
    </div>
    )
}