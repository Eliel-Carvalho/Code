let idade;
const pessoa = {
    name: "eliel",
    age: 22
};

//const name = pessoa.name
//console.log(name) //maneira tradional!!!



/*desetruturação
const { name } = pessoa //tirando uma propriedade de dentro de objeto!!!
console.log(name)*/


/*/REMOMEANDO PROPRIEDADE
const { name: nome } = pessoa //tirando uma propriedade de dentro de objeto!!!
console.log(nome)*/

//renomeado variavel
({age: idade} = pessoa)

console.log(idade) //para esse bloco de codigo não dar error, devemos coolocar o ; no feichamento do objeto la encima