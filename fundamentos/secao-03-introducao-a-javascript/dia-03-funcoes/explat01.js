/*De olho na dica 👀: Você também pode pensar nos parâmetros como variáveis da função que são inicializadas com valores externos, definidos na chamada da função. Na sequência, são apresentadas mais informações sobre “chamar” uma função.


Anota aí 📝: Uma função geralmente executa um conjunto de instruções e retorna um resultado. Para retornar esse resultado, é utilizada a palavra reservada return.
*/


function cumprimentaCliente(cliente) {
    return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
} cumprimentaCliente('Sra. Joana')

console.log(cumprimentaCliente('Sra. Joana'))

let saldo = 300;

function somaSaldo(valor) {
    return valor + saldo;
}

function SubtraiSaldo(valor) {
    return valor - saldo;
}

function multiplicaSaldo(valor) {
    return valor * saldo;    
}

function divideSaldo(valor) {
    return valor / saldo;
}

console.log(somaSaldo(600));
console.log(SubtraiSaldo(80));
console.log(multiplicaSaldo(9));
console.log(divideSaldo(7));