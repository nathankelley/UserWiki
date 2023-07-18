// Determine the base URL based on the host (localhost or Render)
const baseUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://userwiki-oasd.onrender.com';

  // Fetch Elden Ring data
fetch('/eldenring')
.then(response => response.json())
.then(eldenData => {
  console.log(eldenData)
  const eldenContainer = document.getElementById('elden-container');

  // SORT
  eldenData.sort((a, b) => a.boss_name.localeCompare(b.boss_name));

  eldenData.forEach(boss => {  
    const bossCard = document.createElement('div');
    bossCard.className = 'bg-white rounded-2xl shadow-2xl w-[22rem] md:w-auto';
    
    // change arrays to strings and add comma + space to look better
    const weaknesses = boss.weaknesses.join(", ");
    const strengths = boss.strengths.join(", ");

    bossCard.innerHTML = 
    `
      <div class="group h-96 w-96">
        <div class="relative h-full w-full rounded-x1 shadow-x1 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img class="h-full w-full rounded-x1 object-cover shadow-x1 shadow-black/40" src="${boss.image}" />
          </div>
          <div class="abosolute inset-0 h-full w-full rounded-x1 bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <h1 class="text-3xl font-bold pb-2">${boss.boss_name}</h1>
              <p class="text-lg">Defense: ${boss.defense}</p>
              <p class="text-lg">Stance: ${boss.stance}</p>
              <p class="text-lg">Parryable: ${boss.parryable}</p>
              <p class="text-lg">Required: ${boss.required}</p>
              <p class="text-lg"><b>Weaknesses:</b> <br>${weaknesses}</p>
              <p class="text-lg"><b>Strengths:</b> <br>${strengths}</p>
              <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900>Read More</button>
            </div>
          </div>
        </div>
      </div>
    `

    eldenContainer.appendChild(bossCard);
  });
})
.catch(error => {
  console.error(error);
  alert('Failed to fetch bosses');
});