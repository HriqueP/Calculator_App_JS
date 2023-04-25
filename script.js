const numBtns = document.querySelectorAll(".data-numbers");
const opBtns = document.querySelectorAll(".data-operations");
const resultado = document.querySelector(".result");
const apagar = document.querySelector(".clear");
const tela = document.querySelector(".visor-display");
const preview = document.querySelector(".visor-display-preview");
const del = document.querySelector(".delete");
//addPreview de operação
//const preview = document.querySelector(".visor-display-preview");
let primeiroValor;
let segundoValor;
let operador;

numBtns.forEach((button) => {
  button.addEventListener("click", () => {
    tela.innerText += button.innerText;
  });
});

opBtns.forEach((button) => {
  button.addEventListener("click", () => {
    primeiroValor = parseFloat(tela.innerText);
    operador = button.innerText;
    preview.innerText = tela.innerText + " " + button.innerText;
    tela.innerText = "";
  });
});

apagar.addEventListener("click", () => {
  tela.innerText = "";
  preview.innerText = "";
});

del.addEventListener("click", () => {
  tela.innerText = tela.innerHTML.slice(0, -1);
});

resultado.addEventListener("click", () => {
  calcularResultado();
});

function calcularResultado() {
  let result;
  segundoValor = parseFloat(tela.innerText);
  console.log(primeiroValor);
  console.log(segundoValor);
  if (primeiroValor == isNaN || primeiroValor == undefined) {
    return;
  }
  switch (operador) {
    case "+":
      result = primeiroValor + segundoValor;
      break;
    case "-":
      result = primeiroValor - segundoValor;
      break;
    case "*":
      result = primeiroValor * segundoValor;
      break;
    case "÷":
      result = primeiroValor / segundoValor;
      break;
    default:
      return;
  }
  preview.innerText = "";
  tela.innerText = result;
}
