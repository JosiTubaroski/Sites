
let ticket = true;
let idade = 20;
let filhoDoDono = false;
let acompanhante = true;
let idadeAcompanhante = 25;

if(ticket == true && idade >= 18 && acompanhante == true) {
  if(acompanhante){
    if(idadeAcompanhante >= 18){
      console.log('Seja Bem vindo e prossiga na festa.');
    }
    else {
      console.log('Infelizmente o seu acompanhante não pode entrar.')
    }
  }
  else {console.log('Seja Bem vindo e prossiga na festa.');
  }
} else if (filhoDoDono) {
  console.log('Prossiga e mande um abraço para o chefe.');
}
else {
  console.log('Volte para sua casa');
}