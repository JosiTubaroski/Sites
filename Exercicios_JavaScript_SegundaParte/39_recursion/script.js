function retornaNumeroPar(number){
  if(number % 2 == 0) {
    console.log('O numero é par: ' + number)
  } else {
    console.log(number)
    retornaNumeroPar(number - 1);
  }
}

retornaNumeroPar(39);