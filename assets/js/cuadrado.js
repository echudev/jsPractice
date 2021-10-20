//Pido que ingresen el lado de un cuadrado
//Le meto Number() para parsear el prompt de string a number y poder sumar las 3 notas
var lado = Number(prompt("Ingrese el lado de un cuadrado en centímetros"))

//Limito los decimales a 2
lado = lado.toFixed(0)

var perim = lado* 4
var sup = lado*lado


alert("El Perímetro del cuadrado es: "+perim+" cm")
alert("La Superficie del cuadrado es: "+sup+" cm2")
