import Campeon from "./model/Campeon.js";
let champions = [];

async function getChampions() {
  return await fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"
  )
    .then((response) => response.json())
    .then((dat) => {
      let championsArray = Object.values(dat.data);
      championsArray.forEach((champ) => {
        let campeon = new Campeon(champ);
        champions.push(campeon);
      });
      console.log(champions);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function renderChampions() {
  let championsContainer = document.getElementById("campeones");
  await getChampions();
  champions.forEach((champ) => {
    let champion = document.createElement("div");
    champion.innerHTML = `
      <img src="${champ.imagen}" alt="${champ.nombre}">
      <h2>${champ.nombre}</h2>
      <p>${champ.titulo}</p>
      <ul>
        <li>Vida: ${champ.vida}</li>
        <li>Ataque: ${champ.ataque}</li>
        <li>Defensa: ${champ.defensa}</li>
        <li>Velocidad: ${champ.velocidad}</li>
        <li>Rango: ${champ.rango}</li>
      </ul>
    `;
    championsContainer.appendChild(champion);
  });
}

renderChampions();
