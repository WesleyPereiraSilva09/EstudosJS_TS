// argumentos que sustenta todos os argumentos enviados
// arguments pode ser usado somente com funções verbosa
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total)
}

funcao(1,2,3,4,5,6,7)


const teste = (...args) => {
    console.log(args)
};

teste('w', 1, 2, 3, 4, 5);