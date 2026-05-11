function escolhaFibonacci(n){
    const numbers = [0, 1]
    let escolha;
    if(n == 1){
        return [0] 
    }
    for(let i = 2; i < n; i++){
        numbers.push(numbers[i-2] + numbers[i-1])
    }
    for (let u in numbers) {
        if (u == n - 1){
            escolha = numbers[u]
        }
    }
    return escolha;    
} 
console.log(escolhaFibonacci(10))