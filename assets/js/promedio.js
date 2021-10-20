//Pido que ingresen las notas para hacer el promedio
//Le meto Number() para parsear el prompt de string a number y poder sumar las 3 notas
var nota1 = Number(prompt("Ingrese la nota del primer parcial"))
var nota2 = Number(prompt("Ingrese la nota del segundo parcial"))
var nota3 = Number(prompt("Ingrese la nota del tercer parcial"))

//Saco el promedio
var promedio= (nota1+nota2+nota3)/3

//Limito los decimales a 2
promedio = promedio.toFixed(2)

//Mando un if anidado para dar los 3 posibles casos
if (promedio >6){
    alert("Tu nota es: "+promedio+" Promocionaste la Materia")
} else {
    if (promedio>4 && promedio<7){
        alert("Tu nota es: "+promedio+" Aprobaste la cursada")
    } else {
    alert("Tu nota es: "+promedio+" Tenés que recuperar")
}
}
