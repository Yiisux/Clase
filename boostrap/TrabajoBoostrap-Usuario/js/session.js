

var key = localStorage.getItem("key");
if(key!=null) {
  $("#apikey").val(key);
}

// Definición de un objeto de tipo averia
function Averias(id, user_id, marca_id, modelo, titulo,descripcion){
  this.id = id,
  this.user_id = user_id,
  this.marca_id = marca_id,
  this.modelo = modelo,
  this.titulo = titulo
  this.descripcion = descripcion
}

function mostrarAverias() {
  $("#tablaaverias").html("");
  listadoTalleres.forEach(function(Averias){

    let htmlAverias = `<tr>  <td id="${averias.titulo}"></td>
     <td id="${averias.marca}"></td>
       <td id="${averias.modelo}"></td>
          <td id="${averias.descipcrion}"></td>
            <td class="td-actions">
                <a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#editarNueva">Editar</a>
                      <a href="#" class="btn btn-sm btn-danger">Borrar</a>          </td></tr>`
    $("#tablaaverias").append(htmlAverias);
  });
}

$.ajax({
  method: "GET",
  url: "http://www.miguelcamposrivera.com/mecaround/api/v1/taller/lista",
  data: { "X-API-KEY": key }
})
.done(function( respuesta ) {
  // respuesta > es un objeto JSON que recibo del servidor
  listadoTalleres = respuesta.averias;
  mostrarAverias();
})
.fail(function( error){
  console.log("Error del servidor");
});
