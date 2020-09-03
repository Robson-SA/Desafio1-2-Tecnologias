// Desafio lidando com Objetos e Vetores
/*Criar um programa com um objeto para armazenar 
dados de um programador como nome, idade e tecnologias que trabalha.*/

//Declarando ARRAY... 
const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias:[ //Observação dentro de um objeto podemos adicionar ARRAYS.
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ]
};
//Acessando os valores dentro do objeto.
console.log(`O usuário ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);