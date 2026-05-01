function fibonacci(n){
    const numbers = [0, 1] 
    if(n == 1){
        return [0] 
    }
    for(let i = 2; i < n; i++){
        numbers.push(numbers[i-2] + numbers[i-1])
    }
    return numbers;
}
console.log(fibonacci(10))