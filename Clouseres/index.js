//habilidade que uma função tem de acessar seu escopo lexico

function pai(){
    const nome = 'wesley';
    return function filho(){
        return nome;
    };
};
