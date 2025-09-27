fetch("https://www.petfinder.com/developers/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }
        return response.json();
    })