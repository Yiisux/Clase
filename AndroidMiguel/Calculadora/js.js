<<<<<<< HEAD
let x0 = document.getElementById('x0').value
let x1 = document.getElementById('x1').value
let x2 = document.getElementById('x2').value
let x3 = document.getElementById('x3').value
let x4 = document.getElementById('x4').value
let x5 = document.getElementById('x5').value
let x6 = document.getElementById('x6').value
let x7 = document.getElementById('x7').value
let x8 = document.getElementById('x8').value
let x9 = document.getElementById('x9').value
let xsuma = document.getElementById('xsuma').value
let xresta = document.getElementById('xresta').value
let xdividir = document.getElementById('xdividir').value
let xigual = document.getElementById('xigual').value
let xmultiplicar = document.getElementById('xmultiplicar').value

function escribir(n){

 	document.getElementById('pantalla').innerHTML = n

}

function sumar(escribir(n)){
		document.getElementById('pantalla').innerHTML = n + n
=======

let num1 = 0;
let num2 = 0;
let opera;

function escribir(numero){
if(num1==0 && num1 !== '0.'){
		num1 = numero;
}else{
		num1 += numero;
}
refrescar();
}


function darComa(){
if(num1 == 0) {
		num1 = '0.';
} else if(num1.indexOf('.') == -1) {
		num1 += '.';
}
refrescar();
}

//Función que coloca la C al presionar dicho botón
function darC(){
num1 = 0;
num2 = 0;
refrescar();
}


//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
if (num1 == 0){
		num1 = parseFloat(document.getElementById("valor_numero").value);
}
num2 = parseFloat(num1);
num1= 0;
opera = valor;
}



function esIgual(){
num1 = parseFloat(num1);
switch (opera){
		case 1:
				num1 += num2;
		break;
		case 2:
				num1 = num2 - num1;
		break;
		case 3:
				num1 *= num2;
		break;
		case 4:
				num1 = num2 / num1;
		break;
		case 5:
				num1 = Math.pow(num2, num1);
		break;
}
refrescar();
num2 = parseFloat(num1);
num1 = 0;
}

function refrescar(){
document.getElementById("valor_numero").value = num1;
>>>>>>> 4c4e7852878d870bbfef464f62bd2011bb15d477
}
