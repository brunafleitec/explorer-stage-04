alert("Vamos fazer alguns cálculos?");

let firstNumber = Number(prompt("Digite o primeiro número:"));
let secondNumber = Number(prompt("Digite o segundo número:"));

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

if (firstNumber == secondNumber) {
    alert("Os números inseridos são iguais.");
} else {
    alert("Os números inseridos são diferentes.");
}

alert(`O resultado da soma é: ${sum}`);

if (sum % 2 == 0) {
    alert(`O resultado da soma dos dois números é par: ${sum}`);
} else {
    alert(`O resultado da soma dos dois números é ímpar: ${sum}`);
};

alert(`O resultado da subtração é: ${sub}`);
alert(`O resultado da multiplicação é: ${multi}`);
alert(`O resultado da divisão é: ${div}`);
alert(`O resultado do resto da divisão é: ${restDiv}`);