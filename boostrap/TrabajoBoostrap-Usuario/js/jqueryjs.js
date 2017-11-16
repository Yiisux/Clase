
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
});


  //agregar
    $(document).on("click","#btn-guardar-nota",function(){
      $.ajax({
    method: "POST",
    url: "http://www.miguelcamposrivera.com/mecaround/api/v1/taller/editar",
    data: { "0gosgg04gsks0kcs0k00848ks4g4ww0okco8kgos": key, titulo: $("#titulo").val(), descripcion: $("#descripcion").val(), marca: $("#marca").val(), modelo: $("#modelo").val()   }
  })
  .done(function( respuesta ) {
    // respuesta > es un objeto JSON que recibo del servidor
    listadoAverias = respuesta.averias;
    mostrarAverias();
  })
  .fail(function( error){
    console.log("Error del servidor");
  });
      $('#modalNuevaNota').modal('hide');
    });

    //limpiar modal
    $('.modal').on('hidden.bs.modal', function(){
    		$(this).find('form')[0].reset(); //para borrar todos los datos que tenga los input, textareas, select.
    		$("label.error").remove();  //lo utilice para borrar la etiqueta de error del jquery validate
    	});
