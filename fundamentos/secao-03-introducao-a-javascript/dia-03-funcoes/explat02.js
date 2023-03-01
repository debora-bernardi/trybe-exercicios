let clientesTrybeBank = ["Paula", "Rodrigo", "Juca"]
function adicionaCliente(cliente) {
    if (typeof cliente === "string") {
        clientesTrybeBank.push(cliente);
        return "Cliente adicionada(o) com sucesso!";
    } else {
        return "O parâmetro passado deve ser do tipo 'string'!";
    }
}

console.log(adicionaCliente(true));
console.log(adicionaCliente("Jacinto"));
console.log(clientesTrybeBank);