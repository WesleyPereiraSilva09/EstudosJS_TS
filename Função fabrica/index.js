function criaPessoa(nome, sobrenome, a, p){

    return{

        nome, sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor){
            //está transformando o valor recebido na variavel valor em um array
            valor = valor.split(' ');
            // a função shift atrelada a variavel valor está removendo o primeiro indice do array,
            //junto ao seu conteudo
            this.nome = valor.shift();
            //a função join juntou o sobrenome em uma string e separou pelo espaço inserido no argumento
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        fala: function(assunto){ 
            return `${nome} ${sobrenome} está ${assunto}`;
        },
        
        altura: a,
        peso: p,

    
    // o comando get faz com que uma função finja ser um atributo
       get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('wes', 'silva', 1.92, 81);
p1.nomeCompleto = "teste teste da silva"
console.log(p1.nomeCompleto);
