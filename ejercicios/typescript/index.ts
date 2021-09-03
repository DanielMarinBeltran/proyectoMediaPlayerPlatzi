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

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
};

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };


// Object

let someObject:object = { type: 'Wildcard' };