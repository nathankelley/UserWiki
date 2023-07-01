// Determine the base URL based on the host (localhost or Render)
const baseUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://userwiki-oasd.onrender.com';

// Fetch Pokemon data
fetch('/pokemon')
.then(response => response.json())
.then(pokeData => {
  console.log(pokeData)
  const pokeContainer = document.getElementById('pokemon-container');

  pokeData.forEach(pokemon => {
    // const pokemonCard = createPokemonCard(pokemon);
    // pokeContainer.appendChild(pokemonCard);
    const pokemonCard = document.createElement('div');
    pokemonCard.className = 'bg-white rounded-2xl shadow-2xl w-[22rem] md:w-auto';
    
    pokemonCard.innerHTML = `
    <div class="p-8 md:p-4 flex flex-col items-center md:flex-row">
      <img src="${pokemon.pokeImage}" alt="${pokemon.pokeName}" class="w-36 h-auto mb-4 md:mb-0 md:mr-4">
      <div class="flex flex-col items-center md:items-start">
        <h2 class="text-xl font-bold text-gray-800">${pokemon.pokeName}</h2>
        <h3 class="text-lg font-bold text-gray-800 mb-2 md:mb-4">Specie: ${pokemon.pokeSpecie}</h3>
        <h3 class="text-md italic font-bold text-gray-600 mb-2 md:mb-4">Type: ${pokemon.pokeTypeOne}, ${pokemon.pokeTypeTwo}</h3>
        <h3 class="text-md md:text-sm italic font-bold text-gray-600 mb-2 md:mb-4">Abilities: ${pokemon.pokeAbilityOne}, ${pokemon.pokeAbilityTwo}</h3>
        <h3 class="text-md md:text-sm italic font-bold text-gray-600">${pokemon.pokeDescription}</h3>
      </div>
    </div>
  

    `;    

    pokeContainer.appendChild(pokemonCard);

  });
})
.catch(error => {
  console.error(error);
  alert('Failed to fetch pokemon');
});

// function createPokemonCard(pokemon) {
//   const { pokeName, pokeSpecie, pokeTypeOne, pokeTypeTwo, pokeDescription, pokeImage } = pokemon;

//   const pokemonCard = document.createElement('div');
//   pokemonCard.className = "bg-white rounded-2xl shadow-xl p-4 max-w-24 flex justify-center"

//   const image = document.createElement('img');
//   image.src = pokeImage;
//   image.alt = pokeName;
//   image.setAttribute('class', 'h-48 object-cover');

//   const name = document.createElement('h3');
//   name.textContent = pokeName;
//   name.setAttribute('class', 'text-xl font-bold text-gray-800');

//   const species = document.createElement('h4');
//   species.textContent = `Species: ${pokeSpecie}`;
//   species.setAttribute('class', 'text-md md:text-sm italic font-bold text-gray-600 mt-2 self-start sm:self-auto');

//   const types = pokeTypeTwo ? `${pokeTypeOne}, ${pokeTypeTwo}` : pokeTypeOne;
//   const type = document.createElement('h2');
//   type.textContent = `Type: ${types}`;
//   type.setAttribute('class', 'text-md italic font-bold text-gray-600 mt-2');

//   const description = document.createElement('p');
//   description.textContent = pokeDescription;
//   description.setAttribute('class', 'text-gray-600 mt-2 w-[200px]');

//   pokemonCard.appendChild(image);
//   pokemonCard.appendChild(name);
//   pokemonCard.appendChild(species);
//   pokemonCard.appendChild(type);
//   pokemonCard.appendChild(description);

//   return pokemonCard;
// }