console.log("trabalhando com atribuição de variaveis");

const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

console.log(primeiroNome, sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
// $ + {} é uma interpolação, ele declara a variavel dentro de uma string/texto

const nomeCompleto = primeiroNome + sobrenome;

console.log(`Meu nome é ${nomeCompleto}`);

console.log(nomeCompleto);

let idade; // declarando variavel

idade = 26 // atribuindo valor
idade = idade + 1 // modificando o valor

console.log(idade)