// Determine the base URL based on the host (localhost or Render)
const baseUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://userwiki-oasd.onrender.com';

fetch('/halo')
  .then(response => response.json())
  .then(haloData => {
    console.log(haloData)
    const haloContainer = document.getElementById('halo-container');

    // SORT
    //haloData.sort((a, b) => a.species_name.localeCompare(b.species_name));

    haloData.forEach(species => {  
        const speciesCard = document.createElement('div');
        speciesCard.className = 'bg-white rounded-2xl shadow-2xl w-[22rem] md:w-auto';

        speciesCard.innerHTML = 
        `
          <div class="group h-96 w-96">
            <div class="relative h-full w-full rounded-x1 shadow-x1 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img class="h-full w-full rounded-x1 object-cover shadow-x1 shadow-black/40" src="${species.image}" />
              </div>
              <div class="abosolute inset-0 h-full w-full rounded-x1 bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold pb-2">${species.species_name}</h1>
                  <p class="text-lg"><b>Sub-Species:</b> <br>${species.sub_species}</p>
                  <p class="text-lg">Average Height: ${species.avg_height}</p>
                  <p class="text-lg">Average Weight: ${species.avg_weight}</p>
                  <p class="text-lg">Average Lifespan: ${species.avg_lifespan}</p>
                  <p class="text-lg">Homeworld: ${species.homeworld}</p>
                  <p class="text-lg">Strengths: ${species.characteristics}</p>
                  <p class="text-lg">Description: ${species.description}</p>
                  <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900>Read More</button>
                </div>
              </div>
            </div>
          </div>
        `
    
        haloContainer.appendChild(speciesCard);
      });
    })
    .catch(error => {
        console.error(error);
        alert('Failed to fetch species');
      });