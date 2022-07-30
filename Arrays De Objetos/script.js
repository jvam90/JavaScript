var pessoa1 = {
    nome: "João",
    idade: 32,
    trabalho: "Engenheiro De Software"
};

var pessoa2 = {
    nome: "Arinalda",
    idade: 64,
    trabalho: "Advogada"
};

var familia = [pessoa1, pessoa2];

//Posso ter um array: uma variável que pode guardar mais de um valor de acordo com as
//posições de memória. Cada item é acessível por seu índice:

//Primeiro item:
console.log(familia[0]);
//Segundo item:
console.log(familia[1]);
//Array inteiro
console.log(familia);