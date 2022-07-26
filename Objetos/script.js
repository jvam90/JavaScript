//Tudo em JavaScript é objeto.
//Por exemplo, o 'console' é um objeto com várias propriedades e métodos que podem ser usados.
//Para declarar um objeto, basta seguir a sintaxe:

//var <nome> = {<lista de propriedades e métodos aqui>};
var pessoa = {
    nome: "João",
    idade: 32,
    ocupacao: "Engenheiro De Software",
};

//O objeto acima tem 3 propriedades: nome, idade e ocupacao.
//Posso acessar pontualmente cada uma:

//nome
console.log("Nome: " + pessoa.nome);
//idade
console.log("Idade: " + pessoa.idade);
//ocupacao
console.log("Ocupação: " + pessoa.ocupacao);
//Ou posso imprimir o objeto inteiro
console.log(pessoa);

//Posso adicionar propriedades também:
pessoa.estudando = true;
//Vai imprimir o objeto com a nova propriedade
console.log(pessoa);