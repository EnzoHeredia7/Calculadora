// esto agrega a la pantalla el valor del boton de la calculadora q toquemos

function agregar(valor) {
    document.getElementById('pantalla').value += valor

}
// no tiene parametros borrar porque en el html no se lo di
function borrar() {
    document.getElementById('pantalla').value = ""
}
// lo mismo con esto lo de parametros
// eval hace los calculos matematicos 
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}


function borrarDeAUnaLetra() {
    const borra = document.getElementById('pantalla').value
    const resultados = borra.slice(0, -1)
    document.getElementById('pantalla').value  = resultados
}