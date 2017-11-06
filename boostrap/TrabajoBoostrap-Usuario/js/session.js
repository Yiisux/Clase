//REGISTRO
$(document).on("click","#logiinRegistro",function(){
  var e = $("#email").val();
  var n = $("#nombre").val();
  var p = $("#pass").val();

  $.ajax({
    method: "POST",
    url: "http://miguelcamposrivera.com/mecaround/api/v1/auth/register",
    data: { email: e, password: p, nombre: n }
  })
  .done(function(respuesta) {
    let key = respuesta.key;
    let nombre = respuesta.nombre;
    let email = respuesta.email;



    localStorage.setItem("key",key);
    if (email==="") {
    alert("email vacio")
    }else{
    alert("Has entrado con sessionStorage")
    sessionStorage.setItem("email", email);
    };

    window.location.href = "historial.html";
  })
  .fail(function(error){
    alert("Login incorrecto");
    console.log(error);
  });

});



//LOGIN
$(document).on("click","#logiin",function(){
  var e = $("#inputEmail").val();
  var p = $("#inputPassword").val();

  $.ajax({
    method: "POST",
    url: "http://miguelcamposrivera.com/mecaround/api/v1/auth/login",
    data: { email: e, password: p }
  })
  .done(function(respuesta) {
    let key = respuesta.key;
    let nombre = respuesta.nombre;
    let email = respuesta.email;



    localStorage.setItem("key",key);
    if( $('#recordar').is(':checked') ) {
          alert(`Has hecho login con el email: ${email}`);
          if (email==="") {
            alert("email vacio")
          }else {
            localStorage.setItem("email", email);
            alert('Has entrado con localStorage')
          }
        }else {
          if (email==="") {
            alert("email vacio")
          }else{
            alert("Has entrado con sessionStorage")
            sessionStorage.setItem("email", email);
          }
        };

    window.location.href = "historial.html";
  })
  .fail(function(error){
    alert("Login incorrecto");
    console.log(error);
  });

});
