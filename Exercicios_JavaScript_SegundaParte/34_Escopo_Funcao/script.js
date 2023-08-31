let numero = 100; // Variavel Global

console.log(numero);

//----------------------------------------------------------------------//

function number(){
  let numero = 350; // Posso utilizar o mesmo nome de variavel dentro da função
  console.log(numero);
}

number();

if(1 == 1) {
  let numero = 1000; // Escopo da condicional
  console.log(numero);
}