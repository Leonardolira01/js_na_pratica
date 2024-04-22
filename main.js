// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let a = 5;
let b = 10;
let resultado = a + b;
console.log(resultado);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".    
// 💡 Para saber o tipo de dado você pode usar o operador `typeof`
let valor = 10;
  if (typeof valor === 'number') {
    console.log("É um número");
  } else {
    console.log("Não é um número");
};

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let verificarValor = "Oie";
  if (typeof verificarValor === "String") {
    console.log("É uma string");
  } else {
    console.log("Não é uma string");
  }

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let verificadorDeBoleanos = true;
  if (typeof verificadorDeBoleanos === 'boolean') {
    console.log("É um booleano");
  } else {
      console.log("Não um booleano");
  }

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let c = 3;
let d = 5;
let resultado2 = c - d;
console.log(resultado2);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let e = 5;
let f = 5;
let result = e * f;
console.log(result);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let g = 10;
let h = 2;
let results = g / h;
console.log(results);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numero = 10;
  if (numero % 2 === 0) {
    console.log("É um número par");
  } else {
    console.log("Não é um número par");
  }

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let number = 10;
  if (number % 2 !== 0) {
  console.log("É um número ímpar");
  }
  else{
    console.log("Não é um número ímpar");
}