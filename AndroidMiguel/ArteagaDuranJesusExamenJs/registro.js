
registrar = ()  =>{

  let correos = ["jesus@gmail.com", "manolo@gmail.com"];
  let Email = document.getElementById('Email').value;
  let pass = document.getElementById('Password').value;
  let confPass = document.getElementById('ConfPassword').value;



  if (pass != "" && confPass != "") {
    //for (var i = 0; i < correos.length; i++) {
      //if(Email != correos[i]){
        if (pass == confPass) {
          alert("registro con exito");

        }else{
          alert("Las contraseñas no coinciden");
        }
    //  }//else{
      //  alert("El correo ya esta siendo usado");
      //}
    //}
  }else{
    alert("Rellene todos los campos");
  }

  if(document.getElementById('Recordar').checked) {
    alert("Entras con localStorage");
    localStorage.setItem("Email", Email);
    window.location.href = "main.html";
  } else {
    alert("Entras con sessionStorage");
    sessionStorage.setItem("Email", Email);
    window.location.href = "main.html";
  }
}
