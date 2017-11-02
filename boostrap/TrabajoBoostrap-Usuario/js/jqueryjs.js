$(function(){
  //eliminar
  $(document).on("click",".btn-danger",function(){
    let tituloCard = $(this).parent().find(".borrarTabla").text();
    let selectorCard = $(this).parent().parent();
    let id = selectorCard.attr("class");
    alert("Eliminado correctamente");
    selectorCard.remove();
  });
  //agregar
    $(document).on("click","#btn-guardar-nota",function(){
      let titulo = $("#Titulo").val();
      let modelo = $("#Modelo").val();
      let descipcrion = $("#descripcion").val();
      let marca = $("#Marca").val();
      $("#tablaaverias").append( '<tr>  <td>'+titulo+'</td>          <td>'+marca+'</td>          <td>'+modelo+'</td>             <td>'+descipcrion+'</td>      <td class="td-actions">            <a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#editarNueva">Editar</a>            <a href="#" class="btn btn-sm btn-danger">Borrar</a>          </td></tr>' );
      $('#modalNuevaNota').modal('hide');
    });

    //limpiar modal
    $('.modal').on('hidden.bs.modal', function(){
    		$(this).find('form')[0].reset(); //para borrar todos los datos que tenga los input, textareas, select.
    		$("label.error").remove();  //lo utilice para borrar la etiqueta de error del jquery validate
    	});
});
