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

  eldenData.forEach(boss => {
    
    const bossCard = document.createElement('div');
    bossCard.className = 'bg-white rounded-2xl shadow-2xl w-[22rem] md:w-auto';
    
    bossCard.innerHTML = `
    <div class="p-8 md:p-4 flex flex-col items-center md:flex-row">
      <img src="${boss.image}" alt="${boss.boss_name}" class="w-36 h-auto mb-4 md:mb-0 md:mr-4">
      <div class="flex flex-col items-center md:items-start">
        <h2 class="text-xl font-bold text-gray-800">${boss.boss_name}</h2>
        <h3 class="text-lg font-bold text-gray-800 mb-2 md:mb-4">Specie: ${boss.hp}</h3>
        <h3 class="text-md italic font-bold text-gray-600 mb-2 md:mb-4">Type: ${boss.defense}, ${boss.stance}</h3>
        <h3 class="text-md md:text-sm italic font-bold text-gray-600 mb-2 md:mb-4">Abilities: ${boss.parryable}, ${boss.required}</h3>
        <h3 class="text-md md:text-sm italic font-bold text-gray-600">${boss.weaknesses}</h3>
      </div>
    </div>
  

    `;    

    eldenContainer.appendChild(bossCard);

  });
})
.catch(error => {
  console.error(error);
  alert('Failed to fetch bosses');
});