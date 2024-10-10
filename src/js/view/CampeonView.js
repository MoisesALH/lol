import { getChampions } from "../controller/CampeonController.js";

const championsContainer = document.getElementById("campeones");
let champions = [];

function createCahmpionCard(champ) {
  let champion = document.createElement("div");
  champion.classList.add("champion");

  const imagen = document.createElement("img");
  imagen.src = champ.imagen;
  imagen.alt = champ.nombre;

  const nombre = document.createElement("h2");
  nombre.textContent = champ.nombre;

  const titulo = document.createElement("p");
  titulo.textContent = champ.titulo;

  const info = document.createElement("div");
  info.classList.add("info");

  const stats = document.createElement("ul");

  const vida = document.createElement("li");
  vida.textContent = `Vida: ${champ.vida}`;

  const ataque = document.createElement("li");
  ataque.textContent = `Ataque: ${champ.ataque}`;

  const defensa = document.createElement("li");
  defensa.textContent = `Defensa: ${champ.defensa}`;

  const velocidad = document.createElement("li");
  velocidad.textContent = `Velocidad: ${champ.velocidad}`;

  const rango = document.createElement("li");
  rango.textContent = `Rango: ${champ.rango}`;

  stats.appendChild(vida);
  stats.appendChild(ataque);
  stats.appendChild(defensa);
  stats.appendChild(velocidad);
  stats.appendChild(rango);

  info.appendChild(stats);

  champion.appendChild(imagen);
  champion.appendChild(nombre);
  champion.appendChild(titulo);
  champion.appendChild(info);

  champion.addEventListener("mouseover", () => {
    imagen.src = champ.imagenHover;
    info.style.display = "block";
  });
  champion.addEventListener("mouseout", () => {
    imagen.src = champ.imagen;
    info.style.display = "none";
  });
  return champion;
}

async function renderChampions() {
  champions = await getChampions();
  if (!champions.length) {
    let error = document.createElement("div");
    error.classList.add("error");
    error.textContent = "Error al cargar los campeones";
    championsContainer.appendChild(error);
  } else {
    champions.forEach((champ) => {
      championsContainer.appendChild(createCahmpionCard(champ));
    });
  }
}

renderChampions();
