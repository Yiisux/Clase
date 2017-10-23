

function calcularMedia(){
  var nota1 = document.getElementById('a').value;
  var nota2 = document.getElementById('b').value;
  var nota3 = document.getElementById('c').value;

  nota1 = parseInt(nota1,10);
  nota2 = parseInt(nota2,10);
  nota3 = parseInt(nota3,10);

  var total = nota1 + nota2 + nota3;
  total = parseInt(total, 10);
  if(total >= 5){
    alert("Aprobado");
  }else {
    alert("Suspenso");
  }

}
