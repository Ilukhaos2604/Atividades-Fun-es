const readline = require(`readline`)

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

menuPrincipal()

function menuPrincipal() {
    rl.question(`Aqui você poderá testar os meus exercícios feitos
    1 - Verificar Número Primo;
    2 - Calcular Fatorial;
    3 - Exibir Sequência de Fibonacci;
    4 - Exibir N-ésimo termo de Fibonacci;
    5 - Tabuada de certo número;
    6 - Sequência de Collatz a partir de tal número;
    7 - Número de tentativas de um Dado de 6 faces;
    0 - Sair...
    
    .:`, (escolha) => {
        const decisao = parseInt(escolha)
    switch (decisao) {
        case 1:
            rl.close(`Qual número em fatorial você gostaria de saber o resultado?
            .:`, (numero) => {
                fatorial(numero)
            })
        break;
        case 2:
        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
        case 0:
            rl.close()
        break;
    }
    })
}

function fatorial(n) {
  let opF = 1;
    for (let i = n; i >= 1; i--) {
      opF *= i;
    }
  return opF;
  menuPrincipal()
}

// acho que não vai dar para adicionar rl.question no switch, por favor rever