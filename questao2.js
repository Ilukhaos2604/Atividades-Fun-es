function nPrimo(n){
    let ePrimo = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
         ePrimo = false
         break;
        }
    }
    return ePrimo
}

// function nPrimo(n) {
//    if (n <= 1) {return false}
//    for(let i = 2; i <= Math.sqrt(n); i++){
//     if(n % i == 0) {return false}
//    }
//    return true;
// }
// console.log(Math.sqrt(3))
// console.log(nPrimo(19))
// console.log(21 % 3)