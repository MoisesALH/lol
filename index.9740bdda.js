class e{constructor(e){this.nombre=e.name,this.titulo=e.title.charAt(0).toUpperCase()+e.title.slice(1),this.vida=e.stats.hp,this.ataque=e.stats.attackdamage,this.defensa=e.stats.armor,this.velocidad=e.stats.movespeed,this.rango=e.stats.attackrange,this.icono=e.image.full,this.imagen=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e.id}_0.jpg`,this.imagenHover=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e.id}_1.jpg`}}const t=async()=>await fetch("http://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(e=>e.json()).then(t=>Object.values(t.data).map(t=>new e(t))).catch(e=>(console.log(e),[])),n=document.getElementById("campeones");let a=[];!async function(){if((a=await t()).length)a.forEach(e=>{n.appendChild(function(e){let t=document.createElement("div");t.classList.add("champion");let n=document.createElement("img");n.src=e.imagen,n.alt=e.nombre;let a=document.createElement("h2");a.textContent=e.nombre;let d=document.createElement("p");d.textContent=e.titulo;let l=document.createElement("div");l.classList.add("info");let o=document.createElement("ul"),i=document.createElement("li");i.textContent=`Vida: ${e.vida}`;let c=document.createElement("li");c.textContent=`Ataque: ${e.ataque}`;let s=document.createElement("li");s.textContent=`Defensa: ${e.defensa}`;let m=document.createElement("li");m.textContent=`Velocidad: ${e.velocidad}`;let r=document.createElement("li");return r.textContent=`Rango: ${e.rango}`,o.appendChild(i),o.appendChild(c),o.appendChild(s),o.appendChild(m),o.appendChild(r),l.appendChild(o),t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(l),t.addEventListener("mouseover",()=>{n.src=e.imagenHover,l.style.display="block"}),t.addEventListener("mouseout",()=>{n.src=e.imagen,l.style.display="none"}),t}(e))});else{let e=document.createElement("div");e.classList.add("error"),e.textContent="Error al cargar los campeones",n.appendChild(e)}}();
//# sourceMappingURL=index.9740bdda.js.map
