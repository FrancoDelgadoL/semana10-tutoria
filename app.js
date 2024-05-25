//Ejercicio 1

let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

// Ejercicio 2 

const nombres = ["Pedro", "Pablo", "Mario", "Marco"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Ejercicio 3 

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (valor) {
    console.log(valor)
});

// Ejercicio 4 

const persona = [
    { name: "Alex", age: 20 },
    { name: "Franco", age: 25 },
    { name: "Pablo", age: 15 },
];

let noms = persona.map(function (value) {
    return value.age;
});

// Ejercicio 5

let findAge = persona.find(valor => valor.age >= 10)
console.log(findAge);

// Ejercicio 6 

function numPar(valor) {
    return valor.age = age % 2 == 0;
}
console.log(persona.some(valor => numPar(valor)));

// Ejercicio 7

let impar = persona.filter(valor => valor.age % 2 == 0);

console.log(impar);