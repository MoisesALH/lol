import Campeon from "../model/Campeon.js";

const urlApi =
  "http://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json";

export const getChampions = async () => {
  return await fetch(urlApi)
    .then((response) => response.json())
    .then((dat) => {
      let championsArray = Object.values(dat.data);
      return championsArray.map((champ) => new Campeon(champ));
    })
    .catch((error) => {
      console.log(error);
      return [];
    });
};
