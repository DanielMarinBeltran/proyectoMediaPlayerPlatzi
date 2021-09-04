// Boolean

let muted: boolean = true;
muted = false;


// Numeros

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String

let nombre:string = 'Daniel';
let saludo = `Hola ${nombre}`;

// Arrays

let people: string[] = [];
people = ["Isabel", "Nicol", "Raul"];
// people.push("9000");

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9000);

// Enum

// enum Color {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul",
// };

// let colorFavorito: Color = Color.Rojo;
// console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };


// Object

let someObject:object = { type: 'Wildcard' };

// Function

function add(a: number, b: number): number{
    return a + b;
};

const sum = add(4, 6);

function createAdder (a: number) : (number) => number {
    return function(b: number){
        return b + a;
    };
};

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = ''): string {
    return `${firstName} ${lastName}`;
};

const richard = fullName("Richard");

console.log(richard);

// Interfaces

enum Color {
    Amarillo = "Amarillo",
    Morado = "Morado"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color ?: Color;
};

let rect: Rectangulo = {
    ancho:4,
    alto:6,
    color: Color.Amarillo,
};

function area ( r:Rectangulo){
    return r.alto * r.ancho;
};

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());  // [Object Object]

rect.toString = function (){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());