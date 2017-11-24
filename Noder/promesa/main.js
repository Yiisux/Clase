let prom = require('./promesas');


prom.calcular(20,3).then((resultado)=>{
  console.log(resultado);
}, (error)=>{
  console.log(error);
});
/*let promesa = new Promise((resolve, reject)=>{
  resolve('Éxito al procesar los datos');
});

promesa.then((resultado)=>{
  console.log(resultado);
}, (error) => {
  console.log(error);
});
*/
