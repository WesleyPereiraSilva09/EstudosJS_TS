function criaPessoa(nome, sobrenome, a, p){

    return{

        nome, sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor){
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
console.log(p1.nomeCompleto);
console.log(p1.imc);