// let numeros = [1, 2, 5, 8, 3, 7, 5]
// let i = 0


// Uso de While
// while (i <= numeros.length) {   // se usa 7 por la cantidad de elementos que tengo
//     console.log(numeros.length[i])
//     i++
// }


//Uso de For
// for (let i = 0; i > numeros.length; i++) {
//     console.log(numeros[i])
// }


// For Of - mas moderno el uso
// for (const numero of numeros) {
//     console.log(numero)
// }


// For In

//FUNCIONES (es una herramienta)------------------------------ grupo de sentencias que se van a repetir varias veces

// Componentes de la función -> 
//mostrar = seria el nombre de la función
//()
//{}
// function mostrar() {
//     console.log('Hola Mundo')
//     console.log(25 * 2)
// }

// //Luego llamamos a la Funcion para ejecutarla
// mostrar()


// function calcularTabla() {
//     let valor = parseInt(prompt('Ingrese un numero para armar una tabla de multiplicar'))
//     for (let i = 1; i <= 10; i++) {
//         let resultado = i * valor
//         console.log(resultado)
//         console.log(` ${valor} x ${i} = ${resultado}`)
//     }
// }
// calcularTabla()



// ----------------- FUNCIONES CON PARAMETROS -----------------------
// function suma(a, b) {
//     // console.log(a)
//     // console.log(b)
//     let resultado = a + b
//     console.log(resultado)
// }


// let valor1 = parseInt(prompt("Ingrese el primer valor"))
// let valor2 = parseInt(prompt("Ingrese el segundo valor"))

// suma(valor1, valor2)

// ------------------ FUNCIONES CON RETURNS ---------------------

// let valor1 = parseInt(prompt("Ingrese el primer valor"))
// let valor2 = parseInt(prompt("Ingrese el segundo valor"))

// let resultadoFinal = suma(valor1, valor2)
// console.log(resultadoFinal)

// function suma(a, b) {
//     let resultado = a + b
//     return resultado
// }



// --------********** EJERCICIO --------**********
//crear una funcion que devuelva la cantidad de digitos que tiene una variable entera positiva de hasta 5 digitos

//Notas:
//0-9 -> 1 digito
//10-99 -> 2 digitos
//100-999 -> 3 digitos
//1000-9999 -> 4 digitos
//10000-99999 -> 5 digitos


// function cantidadNumeros(digitos) {
//     if (digitos < 10) {
//         return 1  // console.log('1 digito')
//     } else {
//         if (digitos < 100) {
//             return 2 // console.log('2 digitos')
//         } else {
//             if (digitos < 1000) {
//                 return 3 // console.log('3 digitos')
//             } else {
//                 if (digitos < 10000) {
//                     return 4 // console.log('4 digitos')
//                 } else {
//                     if (digitos < 100000) {
//                         return 5 // console.log('5 digitos')
//                     }
//                     else {
//                         return `no es un numero`    // console.log('Ingresaste mas de 5 digitos')
//                     }
//                 }
//             }
//         }
//     }
// }

// let valor = parseInt(prompt("Ingrese una valor de hasta 5 digitos"))


// let mensaje = cantidadNumeros(valor)

// console.log(`el numero que usted ingreso tiene ${mensaje} digitos`)


// --------********** EJERCICIO --------**********

// function sumar(a, b) {
//     return a + b
// }
// console.log(sumar(12, 8.2))



// */*/*/*/*/*/*/*/ FUNCION FLECHA-ARROW */*/*/*/*/*/*/*/

// const sumar = (a, b) => {
//     return a + b
// }
// sumar(58, 6)

// */*/*/*/*/*/*/*/ FUNCIONES ANONIMAS==>DOM==>DOCUMENT OBJECT MODEL */*/*/*/*/*/*/*/




// --------********** EJERCICIO --------**********

// const gritar = (mensaje) => {
//     return `¡${mensaje}!`
// }

// console.log(gritar('hola'))
// //¡hola!



// --------********** EJERCICIO --------**********

// const generarEmail = (nombre, dominio) => {
//     return `${nombre}@${dominio}.com`
// }

// console.log(generarEmail('juan', 'gmail'))
// //juan@gmail.com



// --------********** EJERCICIO --------**********

//puedeVerPelicula(12, false)
//false
//puedeVerPelicula(16, false)
//true
//puedeVerPelicula(18, true)
//true

// const puedeVerPelicula = (edad, autorizacion) => {
//     return edad > 15 || autorizacion

//     //ternario
//     // return edad > 15 || autorizacion ? true : false

//     // forma largar (debajo)
//     // if (edad > 15 || autorizacion == true) {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }

// }

// console.log(puedeVerPelicula(12, false))
// console.log(puedeVerPelicula(16, false))
// console.log(puedeVerPelicula(18, false))



// // ******************************************** ACLARACION
// let valor = false

// if (valor) {
//     console.log('segui')
// } else {
//     console.log('estas afuera')
// }




// --------********** EJERCICIO --------**********

// const esVocal = (a) => {
//     return (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')

//     //forma larga
//     // if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
//     //     return true
//     // }
//     // else {
//     //     return false
//     // }
// }
// console.log(esVocal('a')) //true
// console.log(esVocal('p')) //false
// console.log(esVocal('o')) //true




// --------********** EJERCICIO --------**********
//Define una funcion jugarPiedraPapelTijera que reciba como argunmentos dos string

const jugarPiedraPapelTijera = (a, b) => {
    if (a == 'tijera' && b == 'piedra' || a == 'piedra' && b == 'tijera')
        return 'Gano Piedra'

    // if (a == 'tijera' && b == 'piedra')
    //     return 'Gano' + b

    if (a == 'piedra' && b == 'piedra')
        return 'Hubo Empate'

    if (a == 'piedra' && b == 'papel')
        return 'Gano' + b

    // if (a == 'piedra' && b == 'tijera')
    //     return 'Gano' + a
}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))
//Gano Piedra
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))
//Empate
console.log(jugarPiedraPapelTijera('piedra', 'papel'))
//Gano Papel
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))
//Gano Piedra
