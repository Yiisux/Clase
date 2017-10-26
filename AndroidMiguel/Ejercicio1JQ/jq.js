$(function(){

  $("#rojo").on("click",function(){
    if($(this).hasClass("btn-bombilla-encendida")) {
      $("body").css("background-color","red");
      $(this).removeClass("btn-bombilla-encendida");
      $(this).addClass("btn-bombilla-apagada-rojo");
      $(this).val("Apagar");

    } else {
      $("body").css("background-color","white");
      $(this).addClass("btn-bombilla-encendida");
      $(this).removeClass("btn-bombilla-apagada-rojo");
      $(this).val("Encender");
    }
  });
  $("#azul").on("click",function(){
    if($(this).hasClass("btn-bombilla-encendida")) {
      $("body").css("background-color","blue");
      $(this).removeClass("btn-bombilla-encendida");
      $(this).addClass("btn-bombilla-apagada-azul");
      $(this).val("Apagar");

    } else {
      $("body").css("background-color","white");
      $(this).addClass("btn-bombilla-encendida");
      $(this).removeClass("btn-bombilla-apagada-azul");
      $(this).val("Encender");
    }
  });
  $("#verde").on("click",function(){
    if($(this).hasClass("btn-bombilla-encendida")) {
      $("body").css("background-color","green");
      $(this).removeClass("btn-bombilla-encendida");
      $(this).addClass("btn-bombilla-apagada-verde");
      $(this).val("Apagar");

    } else {
      $("body").css("background-color","");
      $(this).addClass("btn-bombilla-encendida");
      $(this).removeClass("btn-bombilla-apagada-verde");
      $(this).val("Encender");
    }
  });


});
