/* Variables con Let*/

let juegosviejos = 3;
let juegosnuevos = 3;

let horasjugadas = 4;

let mes1 = 'Enero';
let mes2 = 'Febrero'

/*Variables con Const*/

const nombre1 = 'Overwatch';
const lanzamiento1 = '3 de Mayo de 2016';
const nombre2 = 'Overwatch 2';
const lanzamiento2 = '4 de Octubre de 2022';
const nombre3 = 'Genshin';
const lanzamiento3 = '28 de Septiembre de 2020';
const nombre4 = 'Leage of Legends';
const lanzamiento4 = '27 de Octubre de 2009';
const nombre5 = 'Minecraft';
const lanzamiento5 = '18 de Noviembre de 2011';

/* Variables con Let*/

let cantidadjuegos = 'La cantidad total de juegos registrados es: ' + juegosnuevos + juegosviejos + '.';
let juegos = `Los juegos registrados son: ${nombre1}, ${nombre2}, ${nombre3}, ${nombre4}, ${nombre5}`;
console.log(juegos);
let juegoviejo = 'Actualmente el juego más viejo es: ' + nombre4 + ' que fue lanzado el ' + lanzamiento4 + '.';
let juegonuevo = 'Actualmente el juego más nuevo es: ' + nombre2 + ' que fue lanzado el ' + lanzamiento2 + '.';

let totaljugado1 = 'El total de horas jugadas en ' + mes1 + ' es de: ' + (horasjugadas*31) + '.';
let totaljugado2 = 'El total de horas jugadas en ' + mes2 + ' es de: ' + (horasjugadas*28) + '.';


console.log(cantidadjuegos);
console.log(juegos);
console.log(juegonuevo);
console.log(juegoviejo);
console.log(totaljugado1);
console.log(totaljugado2);




/*Condiciones*/

if (mes1 === 'Enero' && totaljugado1 >= 124) {
    console.log(`Su tiempo excede lo recomendado, tiempo total: ${totaljugado1}`);
} else if (mes1 === 'Enero' && totaljugado1 <= 124) {
    console.log(`Su tiempo está en lo recomendado, tiempo total: ${totaljugado1}`);
}

if (mes1 === 'Febrero' && totaljugado1 >= 112) {
    console.log(`Su tiempo excede lo recomendado, tiempo total: ${totaljugado1}`);
} else if (mes1 === 'Febrero' && totaljugado1 <= 112) {
    console.log(`Su tiempo está en lo recomendado, tiempo total: ${totaljugado1}`);
}


/*Operador ternario*/


let resultadoJuegos = juegosviejos > juegosnuevos 
    ? 'Hay más juegos viejos que nuevos' 
    : juegosviejos < juegosnuevos 
        ? 'Hay más juegos nuevos que viejos' 
        : 'Hay el mismo número de juegos viejos y nuevos';

console.log(resultadoJuegos);


let tiempoJuego = horasjugadas > 3 
    ? 'Has jugado más de 3 horas' 
    : 'Has jugado 3 horas o menos';

console.log(tiempoJuego);


let resultadoMes = mes1 === 'Enero' 
    ? 'El primer mes del año es Enero' 
    : 'El primer mes del año no es Enero';

console.log(resultadoMes);


let resultadoMes2 = mes2 === 'Febrero' 
    ? 'El mes es Febrero' 
    : 'El mes no es Febrero';

console.log(resultadoMes2);








