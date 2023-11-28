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
    // Implementa la lógica para verificar si la entidad cumple con al menos un filtro activo
    // Por ejemplo, si entity.Filters contiene al menos un filtro activo
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

document.getElementById('btnSurface').addEventListener('click', function() {
    gestionarFiltro("Surface");
});
document.getElementById('btnUnderground').addEventListener('click', function() {
    gestionarFiltro("Underground");
});
document.getElementById('btnJungle').addEventListener('click', function() {
    gestionarFiltro("The Jungle");
});

