
function verifyAge(number) {
  if(number >= 18){
    console.log('Você já é de maior')
  } else {
    console.log('Você ainda é uma criança')
  }
}

verifyAge(15);

//---------------------------------------------------------------------------//

function tabuada(number) {
  for(let i = 1; i <= 10; i++){
    console.log(`${number} X ${i} = ${number * i}`);
  }
}

tabuada(8);