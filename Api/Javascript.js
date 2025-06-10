console.log("POKEMON DATA");

function searchPokemon(event){

    event.preventDefault();

    const pokemon_name = document.getElementById("Pok_name").value.toLowerCase();
   

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)

    .then(response => {
        if (!response.ok) {
            throw new Error('Pokemon not found ' + response.statusText);
        }
        return response;
    })

    .then(response => response.json())
    
    .then(data => {
        console.log(data);
       document.getElementById("output").innerHTML = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>ID:</strong> ${data.id}<br>
        <strong>Height:</strong> ${data.height}<br>
        <strong>Weight:</strong> ${data.weight}
        `;

        const imageUrl = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonImage");
        imgElement.src = imageUrl;
        imgElement.style.display = 'block'; // Show the image
    
    })
    .catch(error => console.error('Error fetching data:', error));
}
