function armazenaSoma(x) {
  return y => x + y;
}

let soma1 = armazenaSoma(10);
console.log(soma1(5)); //15

let soma2 = armazenaSoma(37);
console.log(soma2(4));