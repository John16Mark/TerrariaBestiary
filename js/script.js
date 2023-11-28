import Entities from './json/Bestiary.json' assert {type: 'json'};
import Filters from './json/Filters.json' assert {type: 'json'};

var filtrosActivos = [];

$(document).ready(()=>{
    actualizarTabla();
});

function actualizarTabla() {
    var filasHtml = '';
    let filas = "";
    for (var i = 0; i < Entities.length; i++) {
      var entity = Entities[i];
  
      if (cumpleConFiltros(entity) || filtrosActivos.length === 0) {
        // Aquí va la sección del código que genera la cadena HTML
        filas += `
            <tr>
                <td>${entity.Id}</td>
                <td>${entity.Entity}</td>
                <td><img src='${entity.Img}' width='${entity.ImgW}' height='${entity.ImgH}'></td>
                <td>
            `;
            for(var j=0; j<entity.Filters.length; j++){
                var filter = entity.Filters[j];
                var f = Filters.findIndex(function(e) {
                    return e.Filter === filter;
                });
                filas += `<img src='${Filters[f].Img}' width='${Filters[f].ImgW}' height='${Filters[f].ImgH}'></img>`;
            }
            filas += `
                </td>
                <td>${entity.Description}</td>
            </tr>
            `;
      }
    }
  
    $("#filasProductos").html(filas);
  }

function cumpleConFiltros(entity) {
    return entity.Filters.some(filtro => filtrosActivos.includes(filtro));
}

function gestionarFiltro(filtro, id){
    var indice = filtrosActivos.indexOf(filtro);
    var cadena = "./img/"+filtro;
    if(indice === -1){
        cadena += "ON.png";
        document.getElementById(id).querySelector('img').src = cadena;
        filtrosActivos.push(filtro);
    } else {
        cadena += "OFF.png";
        document.getElementById(id).querySelector('img').src = cadena;
        filtrosActivos.splice(indice, 1);
    }
    console.log(filtrosActivos);
    actualizarTabla();
}

document.getElementById('btnBoss').addEventListener('click', function() {
    gestionarFiltro("Boss Enemy", 'btnBoss');
});
document.getElementById('btnRare').addEventListener('click', function() {
    gestionarFiltro("Rare Creature", 'btnRare');
});
document.getElementById('btnSurface').addEventListener('click', function() {
    gestionarFiltro("Surface", 'btnSurface');
});
document.getElementById('btnDaytime').addEventListener('click', function() {
    gestionarFiltro("Daytime", 'btnDaytime');
});
document.getElementById('btnParty').addEventListener('click', function() {
    gestionarFiltro("Party", 'btnParty');
});
document.getElementById('btnWindy').addEventListener('click', function() {
    gestionarFiltro("Windy Day", 'btnWindy');
});
document.getElementById('btnRain').addEventListener('click', function() {
    gestionarFiltro("Rain", 'btnRain');
});
document.getElementById('btnNight').addEventListener('click', function() {
    gestionarFiltro("Nighttime", 'btnNight');
});
document.getElementById('btnBlood').addEventListener('click', function() {
    gestionarFiltro("Blood Moon", 'btnBlood');
});
document.getElementById('btnGraveyard').addEventListener('click', function() {
    gestionarFiltro("Graveyard", 'btnGraveyard');
});
document.getElementById('btnUnderground').addEventListener('click', function() {
    gestionarFiltro("Underground", 'btnUnderground');
});
document.getElementById('btnCaverns').addEventListener('click', function() {
    gestionarFiltro("Caverns", 'btnCaverns');
});
document.getElementById('btnGranite').addEventListener('click', function() {
    gestionarFiltro("Granite", 'btnGranite');
});
document.getElementById('btnMarble').addEventListener('click', function() {
    gestionarFiltro("Marble", 'btnMarble');
});
document.getElementById('btnUnderMush').addEventListener('click', function() {
    gestionarFiltro("Underground Mushroom", 'btnUnderMush');
});
document.getElementById('btnSpider').addEventListener('click', function() {
    gestionarFiltro("Spider Nest", 'btnSpider');
});
document.getElementById('btnSnow').addEventListener('click', function() {
    gestionarFiltro("Snow", 'btnSnow');
});
document.getElementById('btnUnderSnow').addEventListener('click', function() {
    gestionarFiltro("Underground Snow", 'btnUnderSnow');
});
document.getElementById('btnDesert').addEventListener('click', function() {
    gestionarFiltro("Desert", 'btnDesert');
});
document.getElementById('btnUnderDesert').addEventListener('click', function() {
    gestionarFiltro("Underground Desert", 'btnUnderDesert');
});
document.getElementById('btnSandstorm').addEventListener('click', function() {
    gestionarFiltro("Sandstorm", 'btnSandstorm');
});
document.getElementById('btnOcean').addEventListener('click', function() {
    gestionarFiltro("Ocean", 'btnOcean');
});
document.getElementById('btnJungle').addEventListener('click', function() {
    gestionarFiltro("The Jungle", 'btnJungle');
});
document.getElementById('btnUnderJungle').addEventListener('click', function() {
    gestionarFiltro("Underground Jungle", 'btnUnderJungle');
});
