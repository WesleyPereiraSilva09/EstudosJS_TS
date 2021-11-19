// o return retorna um valor e para a execução da função

// const teste = (a, b) => {

//     return a+b
// }

// function teste (){

//     return 'wesley silva'
// }
// teste()

// console.log(teste)

function mutiplicador1(mutiplicador){

    return function(n){
        return n * mutiplicador
    };
};

const duplica = mutiplicador1(2);
const vezes5 = mutiplicador1(5);

console.log(duplica(2));
console.log(vezes5(10));