import './assets/App.css'
import { useState } from 'react'

function App() {
  const [petType, setPetType] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState('');
  const [visibleDetails, setVisibleDetails] = useState({});

  async function searchPets() {
    if (!petType) {
      setError('Please select a pet type.');
      setAnimals([]);
      return;
    }

    const apiUrl = `https://api.petfinder.com/v2/animals?type=${petType}&page=${pageNumber}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJIVVJ1WXFJOW1UUTJPUEJIbUEzU0RrQnBCZGg0MXdiclVDOEswNzRwdFMzWVc5ZHEzZSIsImp0aSI6ImY5OTBkOTE0Nzg0ZDcwNTY4M2M2YjQwMTMwZTcwZDg4YThmZTdlNzY1NzMxMDgwZjYyNDcwMGNhNTJmMzU5MzBlOTQ0YzhkMzcxMGQ0ZGEyIiwiaWF0IjoxNzU5MTA1NTI2LCJuYmYiOjE3NTkxMDU1MjYsImV4cCI6MTc1OTEwOTEyNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.Kz5nMQYRQLTjASob8gdnGhfSTbmC1RrsbsGFsOBcKvMzsMJH7ciApz0xccgZOgthIMFAexx1-mTQlWUAOf4ownWQ7IJQjun-ePU3s8HFjMS5lX_x6GfoD5hnOdftwM5c0IOhS7b9e4vfFsn6gksQICTo0Twlrh5iOQXPmYrUAcRvXf1lmPiB3q580BnMSXE5PDOHs3F9DpAS-Qs4H_0iu76lQIWNw_Addd4u8RI6Nbu4KVoVWBHFqXpgnkUAjmhHKK2TF_v-6fybi05hHZ6MtLaTQIEW0_aeYAQrpB0Q0WvYKFBp5J6Gx7tQkg7ZK_EgwORBUwN4XLoeACgRkbcmvQ'
        }
      });

      const data = await response.json();
      setAnimals(data.animals || []);
      setError('');
    } catch (err) {
      setError('Error: ' + err.message);
      setAnimals([]);
    }
  }

  function toggleDetails(id) {
    setVisibleDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  return (
    <>
      <div className="title-section">
        <h1>Welcome to Bark & Meow Match</h1>
        <h2>Adoption Site</h2>
      </div>

      <div className="middle-section">
        <select 
          id="petType" 
          value={petType} 
          onChange={(e) => setPetType(e.target.value)}
        >
          <option value="">Select a pet type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="bird">Bird</option>
        </select>

        <input 
          type="number" 
          id="pageNumber" 
          value={pageNumber} 
          min="1" 
          placeholder="Page number"
          onChange={(e) => setPageNumber(e.target.value)}
        />

        <button onClick={searchPets}>Search Pets</button>
      </div>

      <div id="results">
        {error && <p>{error}</p>}
        {animals.length === 0 && !error && <p>No pets found.</p>}
        {animals.map(animal => (
          <div key={animal.id}>
            <h3>{animal.name}</h3>
            <p>{animal.breeds.primary}</p>
            <p>{animal.age} - {animal.gender}</p>
            <button onClick={() => toggleDetails(animal.id)}>
              {visibleDetails[animal.id] ? 'Hide Details' : 'Show Details'}
            </button>
            {visibleDetails[animal.id] && (
              <div>
                <pre>{JSON.stringify(animal, null, 2)}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      <div id="image-container" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" src="/group 15 pic 1.jpg" draggable="false"/>
        <img className="image" src="/group 15 pic 2.jpg" draggable="false"/>
        <img className="image" src="/group 15 pic 3.jpg" draggable="false"/>
        <img className="image" src="/group 15 pic 4.jpg" draggable="false"/>
        <img className="image" src="/group 15 pic 5.jpg" draggable="false"/>
      </div>

      <footer>MADE BY GROUP 15</footer>
    </>
  )
}

export default App