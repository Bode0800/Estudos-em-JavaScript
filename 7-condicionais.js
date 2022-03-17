console.log(`Trabalhando com listas`);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;


console.log(`Destinos Possiveis:`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(listaDeDestinos);

// if(idadeComprador >= 18){
    
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); 
// }else if(estaAcompanhada){

//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1, 1);
//     }else{
    
//         console.log("Não é maior de idade, não posso vender");
// }
// código de referencia ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

if(idadeComprador >= 18 || estaAcompanhada == true){
    // as || significam "ou" ou "e"
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); 
}else{
    console.log("Não é maior de idade e não esta acompanhado, não posso vender");
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada == true){

    console.log("Boa Viagem!")
} else{

    console.log("Você não pode embarcar")
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
// operadores logicos para maior, menor e igual