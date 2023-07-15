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
  pokeData.sort((a, b) => a.pokeName.localeCompare(b.pokeName));
  const searchBar = document.getElementById('search-bar');
      // Function to filter Pokémon based on search query
      const filterPokemons = () => {
        const searchQuery = searchBar.value.toLowerCase();
        let filteredPokemons;
      
        if (searchQuery.trim() === '') {
          // If search query is empty, sort by pokeDexNum
          filteredPokemons = [...pokeData].sort((a, b) => a.pokeDexNum - b.pokeDexNum);
        } else {
          // Filter based on search query
          filteredPokemons = pokeData.filter(pokemon =>
            pokemon.pokeName.toLowerCase().includes(searchQuery)
          );
        }
      
        pokeContainer.innerHTML = '';
      
        filteredPokemons.forEach(pokemon => {
          // const pokemonCard = createPokemonCard(pokemon);
          // pokeContainer.appendChild(pokemonCard);
          const pokemonCard = document.createElement('div');
          pokemonCard.className = 'bg-white rounded-2xl shadow-lg w-[22rem] md:w-11/12 sm:h-auto hover:scale-110 transition ease-in-out duration-300 hover:z-0 z-1';
          
          pokemonCard.innerHTML = `
          <div class="p-8 md:p-4 flex flex-col items-center md:flex-row">
          <div class="aspect-w-1 aspect-h-1">
          <img src="${pokemon.pokeImage}" alt="${pokemon.pokeName}" class="w-auto h-36 md:w-auto md:h-56 object-contain mb-4 md:mb-0  mt-8">
          </div>
            <div class="flex flex-col items-center md:items-start md:ml-8">
              <h2 class="text-xl font-bold text-gray-800 max-w-prose mb-1">${pokemon.pokeName}, #${pokemon.pokeDexNum}</h2>
              <h3 class="text-lg font-bold text-gray-800 mb-2 md:mb-4 max-w-prose">Specie: ${pokemon.pokeSpecie}</h3>
              <h3 class="text-md italic font-bold text-gray-600 mb-2 md:mb-4 max-w-prose">Type: ${pokemon.pokeTypeOne}${pokemon.pokeTypeTwo ? `, ${pokemon.pokeTypeTwo}` : ''}</h3>
              <h3 class="text-md md:text-sm italic font-bold text-gray-600 mb-2 md:mb-4 max-w-prose">Abilities: ${pokemon.pokeAbilityOne}${pokemon.pokeAbilityTwo ? `, ${pokemon.pokeAbilityTwo}` : ''}</h3>
              <h3 class="text-md md:text-sm italic font-bold text-gray-600 max-w-prose">${pokemon.pokeDescription}</h3>
            </div>
          </div>
        
      
          `;    
      
          pokeContainer.appendChild(pokemonCard);
              
        });
      };

    // Add event listener to search bar
    searchBar.addEventListener('input', filterPokemons);

    // Initial rendering of Pokémon cards
    filterPokemons();

})
.catch(error => {
  console.error(error);
  alert('Failed to fetch pokemon');
});
