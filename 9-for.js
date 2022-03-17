console.log(`Trabalhando com listas`);

console.log(`Destinos Possiveis:`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo"

console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;
for(let contador = 0; contador < 3; contador++){

    if (listaDeDestinos[contador] == destino){

        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){

    console.log("Boa Viagem!");
}else{

    console.log("Desculpe, tivemos um erro");
}
