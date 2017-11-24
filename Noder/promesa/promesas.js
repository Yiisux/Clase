let calcular = (num1, num2)=>{
  return new Promise((result, reject)=>{
    setTimeout(()=>{
      let suma = num1 + num2;
      if(suma > 10){
        result(num1 + num2);
      }else{
        reject('Error al procesar los datos');
      }

    }, 2000);
  });
}

module.exports = {
  calcular
}
