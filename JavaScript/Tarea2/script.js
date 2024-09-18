/* 1. Crear cuatro arreglos distintos */

const numeros = [1, 2, 3, 4, 5];
let nombres = ['Ana', 'Juan', 'Carlos', 'María', 'Luis'];
let precios = [99.99, 249.99, 19.99, 4.99, 50.00];
let mixto = ['perro', 42, true, 'gato', false];



/*1.1 Usando .reduce()*/

const sumaNumeros = numeros.reduce((acc, curr) => acc + curr, 0);
let nombreCompleto = nombres.reduce((acumulador, valor) => acumulador + ' ' + valor);
let totalPrecios = precios.reduce((acumulador, valor) => acumulador + valor, 0);
let concatenacionMixta = mixto.reduce((acumulador, valor) => acumulador + ' ' + valor, '');



/*Mostrar resultados .reduce()*/

console.log('Suma de números:', sumaNumeros);
console.log('Concatenar nombres:', nombreCompleto);
console.log('Suma de precios:', totalPrecios);
console.log('Concatenación mixta:', concatenacionMixta);



/*1.2 Usando .filter()*/

const numerosMayoresQueTres = numeros.filter(num => num > 3);
let nombresConA = nombres.filter(nombre => nombre.includes('a')); 
let preciosMayoresDe50 = precios.filter(precio => precio > 50); 
let soloBooleanos = mixto.filter(valor => typeof valor === 'boolean');



/*Mostrar resultados .filter()*/

console.log('Números mayores que 3:', numerosMayoresQueTres);
console.log('Nombres con la letra "a":', nombresConA);
console.log('Precios mayores de 50:', preciosMayoresDe50);
console.log('Booleanos en array mixto:', soloBooleanos);



/*1.3 Usando .map()*/

const cuadradosNumeros = numeros.map(num => num * num);
let nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
let preciosConDescuento = precios.map(precio => precio * 0.9);
let tiposDeMixto = mixto.map(valor => typeof valor);



/*Mostrar resultados .map()*/

console.log('Cuadrados de los números:', cuadradosNumeros);
console.log('Nombres en mayúsculas:', nombresEnMayusculas);
console.log('Precios con descuento:', preciosConDescuento);
console.log('Tipos en array mixto:', tiposDeMixto);



/*1.4 Usando .forEach()*/

console.log('Números:');
numeros.forEach(num => console.log(num));
console.log('Nombres:');
nombres.forEach(nombre => console.log(nombre)); 
console.log('Precios:');
precios.forEach(precio => console.log(precio)); 
console.log('Valores mixtos:');
mixto.forEach(valor => console.log(valor)); 


/* 2. Funciones tipo flecha */

/*Función con 0 parámetros*/

const mensaje = () => 'La papa es un tubérculo';

/*Función con 1 parámetro*/

const cuadrado = x => x * x;

/*Función con 2 parámetros*/

const suma = (a, b) => a + b;

/*Función con más de 2 parámetros*/

const multiplyAndAdd = (a, b, c) => (a * b) + c;


/*Función que retorna un objeto*/

const createPerson = name => ({ Nombre: name, Edad: 30 });



/*Mostrar resultados*/

console.log(mensaje());
console.log('el cuadrado de 14 es:', cuadrado(14));
console.log('Suma de 10 y 25:', suma(10, 25));
console.log('Resultado de multiplicar y sumar (2 * 3) + 4:', multiplyAndAdd(2, 3, 4));
console.log('Objeto persona:', createPerson('John'));
