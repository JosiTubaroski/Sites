
//Métodos//

const arrayAnimal = ['Cachorro', 'Passáro', 'Gato'];

console.log(arrayAnimal[2].toLocaleUpperCase()); // toLocaleUpperCase é um metodo 

//Objetos//

const Cachorro = {
  raca: 'Labrador',
  patas: 4,
  doenca: false,
  cor: 'Branco',
  latir() {
     console.log('Au Au');
  }
}

console.log(Cachorro.raca);
console.log(Cachorro.patas);
console.log(Cachorro.doenca);
console.log(Cachorro.cor);
Cachorro.latir();

// Adicionar e Deletar propriedades do objeto
