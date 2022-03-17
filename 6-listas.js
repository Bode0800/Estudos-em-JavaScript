console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const sãoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos Possiveis:`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // ele adiciona um item na listagem

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // splice serve para deletar um item de uma array (lista)

console.log(listaDeDestinos)

console.log(listaDeDestinos[1], listaDeDestinos[0])