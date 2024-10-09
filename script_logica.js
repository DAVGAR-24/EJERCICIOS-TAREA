let n = parseInt(prompt("Ingrese un número"));

let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}
console.log(` la suma de los números del 1 al ${n} es : ${suma}`);


  

// EJERCICIO 2
let numero = parseInt(prompt("Ingrese un número:"));
if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}



// EJERCICIO TRES
let edad = parseInt(prompt("Ingrese edad:"));
let genero = prompt('ingrese su genero (M/F):');

if (edad <= 10)
{   if(genero =='F')
    {
        console.log('usted recibe un jugo y una pizza hawaiana');
    }
    else if(genero == 'M'){
        console.log('usted recibe un jugo y una pizza tres carnes');
    }
    else{
        console.log('usted recibe un jugo');
    }
    
}
else if (edad >= 18)
    {   if(genero =='F')
        {
            console.log('usted recibe una cerveza y una pizza hawaiana');
        }
        else if(genero == 'M'){
            console.log('usted recibe una cerveza y una pizza tres carnes');
        }
        else{
            console.log('usted recibe una cerveza');
        }
        
    }
else
{
    console.log('No recibe nada')
}

// EJERCICIO CUATRO

const menu = [
    { nombre:  "Pizza", precio: 8.5 },
    { nombre: "Hamburguesa", precio: 6.0 },
    { nombre: "Ensalada", precio: 4.5 },
    { nombre: "Refresco", precio: 2.0 },
    { nombre: "Agua", precio: 1.5 }
];

function mostrarMenu() {
    console.log("Menú disponible:");
    menu.forEach(item => {
        console.log(`${item.nombre}: $${item.precio}`);
    });
}

function seleccionarProductos() {
    let total = 0;
    let seleccion;

    mostrarMenu();

    do {
        seleccion = prompt("Escribe el nombre del producto que quieres seleccionar o 'pagar' para finalizar:");
        
        if (seleccion.toLowerCase() === "pagar") {
            break;
        }
        const producto = menu.find(item => item.nombre.toLowerCase() === seleccion.toLowerCase());

        if (producto) {
            total += producto.precio;
            console.log(`Has seleccionado: ${producto.nombre}. Total acumulado: $${total.toFixed(2)}`);
        } else {
            console.log("Producto no encontrado. Inténtalo de nuevo.");
        }

    } while (seleccion.toLowerCase() !== "pagar");

    console.log(`Total a pagar: $${total.toFixed(2)}`);
}
seleccionarProductos();



//EJERCICIO 5
let numero1 = parseInt(prompt("Ingrese un número: "));
let multiplicacion = parseInt(prompt("Ingrese hasta que número quiere: "));
let s = 0
for (let i = 1; i <= multiplicacion; i++) {
    operacion = numero1 * i
    console.log(`${numero1} X ${i} = ${operacion}`);
    s += operacion

}
console.log(`La suma de los resultados es: ${s}`);
 


//EJERCICIO 6
const matricula = 1000000;

let promedio = parseFloat(prompt("Ingrese su promedio:"));

let matriculaConDescuento = matricula;

if (promedio < 3) {
    console.log(`El valor de su matrícula después del descuento es: $${matriculaConDescuento.toLocaleString()}`);
} else if (promedio >= 3 && promedio < 4) {
    matriculaConDescuento = matricula - (matricula * 0.05);
    console.log(`El valor de su matrícula después del descuento es: $${matriculaConDescuento.toLocaleString()}`);
} else if (promedio >= 4) {
    matriculaConDescuento = matricula - (matricula * 0.50);
    console.log(`El valor de su matrícula después del descuento es: $${matriculaConDescuento.toLocaleString()}`);
}
 

