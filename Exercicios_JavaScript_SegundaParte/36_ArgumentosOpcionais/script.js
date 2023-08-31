
const veiculo = (nome, marca) => {
  if(nome == undefined || marca == undefined){
    console.log('É necessário passar os dois argumentos.')
  } else {
    console.log(nome, marca);
  }
   
}

veiculo('c4 Pallas');