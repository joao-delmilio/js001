// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "joao"
let idade = 19

// Console e Debug
console.log(nome, idade)

nome = "maco"
idade = 22
console.log(nome, idade)

//Tipos de dados
// text == string
let cidade = "nova odessa"

// numero == number
let salario = 1500.35

// booleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+, -, /, *, **, %)
console.log(10 + 15)

let n1 = 10
let n2 = 5

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 / n2)
console.log(n1 * n2)
console.log(n1 ** n2)
console.log(n1 % n2)

//     Operadores relacionais (>, <, >=, <=, != ==)
console.log(n1 == n2)
console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 != n2)

//     Operadores lógicos (!, &&, ||")
console.log(!10 > 2)
console.log(!false)
console.log(10 > 2 && 35 < 100)
console.log(10 > 2 && 35 > 100)
console.log(10 < 2 || 100 == 150 || 57 >= 57)

//DEFASIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
//Faça um código que acresente 17% ao preço e imprimira
//Faça um código que desconte 7% do preço e imprima

precoAcrescimo = (17 / 100) * preco
console.log("O preço acrescido de 17% é de:", preco + precoAcrescimo, "sendo", precoAcrescimo.toFixed(2), "o valor do acrescimo")
precoDesconto = (7 / 100) * (preco + precoAcrescimo)
console.log("O preço total com o desconto é de:", preco + precoAcrescimo - precoDesconto, "sendo", precoDesconto.toFixed(2), "o valor do desconto em cima do valor com acrescimo")
precoDesconto = ((7/100)*preco)
console.log("O preço com desconto em cima do preço orignal é de:", precoDesconto.toFixed(2), "totalizando", preco - precoDesconto)

// Estrutura
//     Estrutura de controle/decisão
if(10>12){
    console.log("10 é maior que 5")
}
else{
    console.log("macaco comendo banana")
}

let idadeCandidato = 19

if(idadeCandidato>=18){
    console.log("Maior de idade")
}
else{
    console.log("Tchau brigado")
}

//DESAFIO
//faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de aumento"

salario=3000

if(salario>5000){
    console.log("Salário OK")
}else{
    console.log("Precisa de aumento")
}

//     Laços de repetição

// Arrays

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
