let a = 20;
let b = 6;
let c = 100;

console.log("soma: "  + (a + b));
console.log("subtração: " + (a - b));
console.log("multiplicação: " + (a * b));
console.log("divisão: " + (a / b) );
console.log("módulo: " + (a % b));

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
}

if (a > b && a > c) {
    console.log("O maior número é: " + a + " (a)");
} else if (b > a && b > c) {
    console.log("o maior número é: " + b + " (b)");
} else {
console.log("O maior número é: " + c + " (c)");
}

let number = 15;

if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {
    console.log("zero")
}