function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`)
    }
    return `Tabuada do ${n} exexutada`;
}
console.log(tabuada(5))