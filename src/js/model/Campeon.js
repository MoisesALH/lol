export default class Campeon {
  constructor(data) {
    this.nombre = data.name;
    this.titulo = data.title.charAt(0).toUpperCase() + data.title.slice(1);
    this.vida = data.stats.hp;
    this.ataque = data.stats.attackdamage;
    this.defensa = data.stats.armor;
    this.velocidad = data.stats.movespeed;
    this.rango = data.stats.attackrange;
    this.icono = data.image.full;
    this.imagen = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`;
    this.imagenHover = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_1.jpg`;
  }
}
