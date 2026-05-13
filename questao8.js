const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

menuPrincipal();

function menuPrincipal() {
  rl.question(
    `Aqui você poderá testar os meus exercícios feitos
    1 - Verificar Número Primo;
    2 - Calcular Fatorial;
    3 - Exibir Sequência de Fibonacci;
    4 - Exibir N-ésimo termo de Fibonacci;
    5 - Tabuada de certo número;
    6 - Sequência de Collatz a partir de tal número;
    7 - Número de tentativas de um Dado de 6 faces até acertar o número 6;
    0 - Sair...
    
    .:`,
    (escolha) => {
      const decisao = parseInt(escolha);
      switch (decisao) {
        case 1:
          nPrimo();
          break;
        case 2:
          fatorial();
          break;
        case 3:
          fibonacci();
          break;
        case 4:
          escolhaFibonacci();
          break;
        case 5:
          tabuada();
          break;
        case 6:
          collatz();
          break;
        case 7:
            dado()
          break;
        default:
          rl.close();
          break;
      }
    }
  );
}

function fatorial() {
  rl.question(
    `Qual número em fatorial você gostaria de saber o resultado?
    .:`,
    (n) => {
      let opF = 1;
      for (let i = n; i >= 1; i--) {
        opF *= i;
      }
      console.log(`
      
      ${n}! é igual a ${opF}
      
      `);
      menuPrincipal();
    }
  );
}

function nPrimo() {
  rl.question(
    `Qual número você gostaria de verificar se é primo ou não
  .: `,
    (n) => {
      let ePrimo = true;
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          ePrimo = false;
          break;
        }
      }
      console.log(
        ePrimo
          ? `
    
    Este número é um número primo
    
    `
          : `
    
    Este número não é um número primo
    
    `
      );
      menuPrincipal();
    }
  );
}

function fibonacci() {
  rl.question(
    `Escolha um número limite para esta sequência de fibonacci
.: `,
    (n) => {
      const numbers = [0, 1];
      if (n == 1) {
        return [0];
      }
      for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1]);
      }
      console.log(`
    
    ${numbers.join(`, `)}
    
    `);
      menuPrincipal();
    }
  );
}

function escolhaFibonacci() {
  rl.question(
    `Escolha a posição do número que você quer saber nesta sequência de fibonacci
    .: `,
    (n) => {
      const numbers = [0, 1];
      let escolha;
      if (n == 1) {
        return [0];
      }
      for (let i = 2; i < n; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1]);
      }
      for (let u in numbers) {
        if (u == n - 1) {
          escolha = numbers[u];
        }
      }
      console.log(`
    
    O número na ${n}a posição é o número ${escolha}
    
    `);
      menuPrincipal();
    }
  );
}

function tabuada() {
  rl.question(
    `Tabuada de qual número você gostaria de ver?
  .: `,
    (n) => {
      for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
      }
      menuPrincipal();
    }
  );
}

function collatz() {
  rl.question(
    `A partir de qual número você gostaria de ver a sequência de collatz?
    .: `,
    (n) => {
      const numbers = [];
      while (n != 1) {
        if (n % 2 == 0) {
          n = n / 2;
        } else {
          n = n * 3 + 1;
        }
        numbers.push(n);
      }
      console.log(numbers.join(`, `));
      menuPrincipal();
    }
  );
}

function dado() {
    let tentativas = 0;
    let n = 0;
    do {
        n = Math.floor(Math.random() * 6) + 1
        tentativas += 1;
    } while (n != 6)
    console.log(`Você precisou de ${tentativas} tentativas para conseguir tirar o número 6`) 
    menuPrincipal()
}
