function dado() {
    let tentativas = 0;
    let n = 0;
    do {
        n = Math.floor(Math.random() * 6) + 1
        tentativas += 1;
        console.log(n)
    } while (n != 6)
    console.log(`Você precisou de ${tentativas} tentativas para conseguir tirar o número 6`) 
}

dado()