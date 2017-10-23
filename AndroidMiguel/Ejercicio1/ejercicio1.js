var a;
var c;
var b = document.getElementById('texto2').value;

function generador(){
   a = document.getElementById("texto1").innerHTML =  Math.trunc(Math.random())*2 +10;
   c = document.getElementById("texto3").innerHTML =  Math.trunc(Math.random())*4 +20;



};

generador();
function comprobar(){
  b = parseInt(b,10)
  suma = a + b;
  if(suma == c){
    alert("CORRECTO");
  }else{
    alert("ERROR");
  }
};
