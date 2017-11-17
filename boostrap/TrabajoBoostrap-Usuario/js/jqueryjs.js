<<<<<<< HEAD

var listadoAverias;
var idTallerEditar;
  //eliminar
  $(document).on("click",".btn-danger",function(){
    let tituloCard = $(this).parent().find(".borrarTabla").text();
    let selectorCard = $(this).parent().parent();
    let id = selectorCard.attr("class");
    alert("Eliminado correctamente");
    selectorCard.remove();
  });

//mostrar
var key = localStorage.getItem("key");
if(key!=null) {
  $("#apikey").val(key);
}

// Definición de un objeto de tipo averia
function Campanias(nombre, clave, causa, fechaInicio, fechaFin){
  this.nombre = nombre,
  this.clave = clave,
  this.causa = causa,
  this.fechaInicio = fechaInicio,
  this.fechaFin = fechaFin
}

function mostrarCampanias() {
  $("#tablaCampanias").html("");
  listadoTalleres.forEach(function(Campanias){

    let htmlCampanias = `<tr>  <td id="${Campanias.nombre}"></td>
     <td id="${Campanias.clave}"></td>
       <td id="${Campanias.causa}"></td>
          <td id="${Campanias.fechaInicio}"></td>
            <td id="${Campanias.fechaFin}"></td>
            <td class="td-actions">
                <a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#editarNueva">Editar</a>
                      <a href="#" class="btn btn-sm btn-danger">Borrar</a>          </td></tr>`
    $("#tablaCampanias").append(htmlCampanias);
  });
}

$.ajax({
  method: "GET",
  url: "http://www.localhost:8080/campaign/list",
  data: { "fd4477d8ce1357ae22f562ab76faa724": key }
})
.done(function( respuesta ) {
  // respuesta > es un objeto JSON que recibo del servidor
  listadoCampanias = respuesta.Campanias;
  mostrarCampanias();
})
.fail(function( error){
  console.log("Error del servidor");
=======
if (localStorage.getItem("email")===null) {
        document.getElementById('email').textContent = sessionStorage.getItem("email");
      }else {
        document.getElementById('email').textContent = localStorage.getItem("email");
      }
$(document).on("click", "#salir", function () {
      alert("storage limpio")
      localStorage.removeItem("email");
      sessionStorage.removeItem("email");
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
});
