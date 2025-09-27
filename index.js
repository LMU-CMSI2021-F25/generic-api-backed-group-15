fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        return response.json();
    })