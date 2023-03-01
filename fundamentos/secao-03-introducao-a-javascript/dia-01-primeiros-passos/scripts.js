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

let ladoA = 30;
let ladoB = 100;
let LadoC = 50;
let somaDeTodosOsLados = ladoA + ladoB + LadoC;
let angulosPositivos = ladoA > 0 && ladoB > 0 && LadoC > 0;

if (angulosPositivos) {
if (somaDeTodosOsLados === 180) {
    console.log(true);
} else {
    console.log(false)
}
} else {
    console.log("Erro: angulo inválido");
}
 
let pecaDeXadrez = "Torre"

switch (pecaDeXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

let nota = 82;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

let d = 8;
let e = 2;
let f = 15;

let par = false;

if ((d % 2 === 0 || e % 2 === 0 || f % 2 === 0)) {
  par = true;
};
console.log(par);

let g = 9;
let h = 20;
let i = 18;

let impar = false;

if ((g % 2 !== 0 || h % 2 !== 0|| i % 2 !== 0)) {
    impar=true;
}
console.log(impar);

let custoDoProduto = 6;
let valorDeVenda = 12;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
    let custoTotalDoProduto = custoDoProduto * 1.2;
    let lucroTotal = (valorDeVenda - custoTotalDoProduto) * 1000;
    console.log(lucroTotal);
  } else {
    console.log("Error, os valores não podem ser negativos!");
  }


  let aliquotINSS;
  let aliquotIR;
  
  let grossSalary = 2000.00;
  
  if (grossSalary <= 1556.94) {
    aliquotINSS = grossSalary * 0.08;
  } else if (grossSalary <= 2594.92) {
    aliquotINSS = grossSalary * 0.09;
  } else if (grossSalary <= 5189.82) {
    aliquotINSS = grossSalary * 0.11;
  } else {
    aliquotINSS = 570.88;
  }
  
  let baseSalary = grossSalary - aliquotINSS;
  
  if (baseSalary <= 1903.98) {
    aliquotIR = 0;
  } else if (baseSalary <= 2826.65) {
    aliquotIR = (baseSalary * 0.075) - 142.80;
  } else if (baseSalary <= 3751.05) {
    aliquotIR = (baseSalary * 0.15) - 354.80;
  } else if (baseSalary <= 4664.68) {
    aliquotIR = (baseSalary * 0.225) - 636.13;
  } else {
    aliquotIR = (baseSalary * 0.275) - 869.36;
  };
  
  console.log("Salário: " + (baseSalary - aliquotIR));
  