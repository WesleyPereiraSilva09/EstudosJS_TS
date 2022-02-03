// Filter filtra um determinado de numero informados verificando se a condição passa é verdadeira ou não
// e a função de callback está sendo usada para fazer o retorno desse valor filtrado.

const arrayTeste = [0, 10 ,50, 20, 56, 70, 1, 2, 3]

const callBac = arrayTeste.filter(valor => valor>10);

console.log(callBac);


const pessoas = [
    {nome = 'Wesley', idade = 20 },
    {nome = 'Wesley', idade = 20},
    {},
    {}
]