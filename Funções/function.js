/*

Function hoisting permite que se chame a função em cima,
mesmo tendo declarada ela em baixo

*/ 
ola();

function ola(){
    console.log('Oooopa');

}

//Objeto de primeira classe (fist-class objects)
//function expression

const teste = function(){

    console.log('função em constante')
}
teste()

const funcaoArrow = () => {
    console.log('arrow function')
}
funcaoArrow();

// para => ({foo: "a"})
// para()

(a) => a + 10;
