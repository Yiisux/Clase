function contador(){
  for(var i=0; i<=10; i++){

  }
  console.console.log(`Resultado: ${i}`);
}

let btn = document.getElementById('btncalcular');

btn.addEventListener('click', function(e){
  contador();
  console.log(e);
});
