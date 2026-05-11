function fatorial(n) {
  let opF = 1;
  for (let i = n; i >= 1; i--) {
    opF *= i;
  }
  return opF;
} 
console.log(fatorial(5));