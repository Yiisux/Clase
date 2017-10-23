function comprobarMes(){
  var mes1 = document.getElementById('mes').value;
  var meses30dias = 30;
  var meses31dias = 31;
  if(mes1 <= 12){
    if (mes1 == 4 || mes1 == 6 || mes1 == 9 || mes1 == 11) {
      alert("Més de 30 días");
    } else{
      alert("Més de 31 días");
    }
  }else {
    alert("El més no es correcto");
  }
}
