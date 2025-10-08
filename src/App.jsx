import { useState, useEffect } from "react";
import './App.css';


export default function App() {
const [info, setInfo] = useState("");
const [loading, setLoading] = useState(false);

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
  <>
    <h1>🐕 Bark Find 🐕 </h1>

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
    </div>

    <footer>
      <p>MADE BY GROUP 15</p>
    </footer>
  </>
);
}