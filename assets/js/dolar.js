//Pido que ingresen el monto en pesos
//Le meto Number() para parsear el prompt de string a number y poder sumar las 3 notas
var pesos = Number(prompt("Ingrese el monto que quiera convertir a dólares"))

//Limito los decimales a 2
pesos = pesos.toFixed(0)

var dolarT = pesos* 175
var dolarB = pesos*180
var dolarO = pesos*100

alert("Dolar Oficial: $"+dolarO)
alert("Dolar Blue: $"+dolarB)
alert("Dolar Turista: $"+dolarT)