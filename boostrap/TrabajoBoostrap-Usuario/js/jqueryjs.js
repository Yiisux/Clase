
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
function Averias(marca_id, modelo, titulo,descripcion){
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
  data: { "0gosgg04gsks0kcs0k00848ks4g4ww0okco8kgos": key }
})
.done(function( respuesta ) {
  // respuesta > es un objeto JSON que recibo del servidor
  listadoTalleres = respuesta.averias;
  mostrarAverias();
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
