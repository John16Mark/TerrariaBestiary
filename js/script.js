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

function gestionarFiltro(filtro){
    var indice = filtrosActivos.indexOf(filtro);
    if(indice === -1){
        filtrosActivos.push(filtro);
    } else {
        filtrosActivos.splice(indice, 1);
    }
    console.log(filtrosActivos);
    actualizarTabla();
}

document.getElementById('btnBoss').addEventListener('click', function() {
    gestionarFiltro("Boss Enemy");
});
document.getElementById('btnRare').addEventListener('click', function() {
    gestionarFiltro("Rare Creature");
});
document.getElementById('btnSurface').addEventListener('click', function() {
    gestionarFiltro("Surface");
});
document.getElementById('btnDaytime').addEventListener('click', function() {
    gestionarFiltro("Daytime");
});
document.getElementById('btnParty').addEventListener('click', function() {
    gestionarFiltro("Party");
});
document.getElementById('btnWindy').addEventListener('click', function() {
    gestionarFiltro("Windy Day");
});
document.getElementById('btnRain').addEventListener('click', function() {
    gestionarFiltro("Rain");
});
document.getElementById('btnNight').addEventListener('click', function() {
    gestionarFiltro("Nighttime");
});
document.getElementById('btnBlood').addEventListener('click', function() {
    gestionarFiltro("Blood Moon");
});
document.getElementById('btnGraveyard').addEventListener('click', function() {
    gestionarFiltro("Graveyard");
});
document.getElementById('btnUnderground').addEventListener('click', function() {
    gestionarFiltro("Underground");
});
document.getElementById('btnCaverns').addEventListener('click', function() {
    gestionarFiltro("Caverns");
});
document.getElementById('btnGranite').addEventListener('click', function() {
    gestionarFiltro("Granite");
});
document.getElementById('btnMarble').addEventListener('click', function() {
    gestionarFiltro("Marble");
});
document.getElementById('btnUnderMush').addEventListener('click', function() {
    gestionarFiltro("Underground Mushroom");
});
document.getElementById('btnSpider').addEventListener('click', function() {
    gestionarFiltro("Spider Nest");
});
document.getElementById('btnSnow').addEventListener('click', function() {
    gestionarFiltro("Snow");
});
document.getElementById('btnUnderSnow').addEventListener('click', function() {
    gestionarFiltro("Underground Snow");
});
document.getElementById('btnDesert').addEventListener('click', function() {
    gestionarFiltro("Desert");
});
document.getElementById('btnUnderDesert').addEventListener('click', function() {
    gestionarFiltro("Underground Desert");
});
document.getElementById('btnSandstorm').addEventListener('click', function() {
    gestionarFiltro("Sandstorm");
});
document.getElementById('btnOcean').addEventListener('click', function() {
    gestionarFiltro("Ocean");
});
document.getElementById('btnJungle').addEventListener('click', function() {
    gestionarFiltro("The Jungle");
});
document.getElementById('btnUnderJungle').addEventListener('click', function() {
    gestionarFiltro("Underground Jungle");
});
