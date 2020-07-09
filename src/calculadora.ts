let historico: Array<string> = [];

let historialItem: string = '';

let operacion: string = '';

let resultado: string = '0';

const botones: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByClassName("operando") as HTMLCollectionOf<HTMLButtonElement>;

console.log(typeof botones[0])
console.log(botones[0])

console.log(typeof botones)
console.log(botones)

const dot: HTMLButtonElement = document.getElementById("dot") as HTMLButtonElement;

function disableOperations(): void {
  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = true
  }
}

function enableOperations() {
  for (let i = 0; i < botones.length; i++) {
    botones[i].disabled = false
  }
}

function enableDot() {
  dot.disabled = false;
}

function disableDot() {
  dot.disabled = true;
}

const pantalla: HTMLSpanElement = document.getElementById('pantalla') as HTMLSpanElement;

function clickBoton(value: string): void {

  if (value === '=') {
    resultado = eval(operacion);

    historico.push(historialItem + ' = ' + resultado);
    addHistorial();

    disableOperations();
    enableDot()

    historialItem = '';
    operacion = '';

  } else if (value === 'C') {
    resultado = '0';
    operacion = '';
    historialItem = '';

    disableOperations();
    enableDot();

  } else {

    if (value === ' + ' || value === ' - ' || value === ' * ') {
      enableDot();
      disableOperations();
    } else if (value === '.') disableDot();
    else enableOperations();

    resultado = '';
    operacion += value;
    historialItem += value;
  }

  if (resultado === '') pantalla.innerText = historialItem;
  else pantalla.innerText = resultado;

}

const contenedorHistorico: HTMLDivElement  = document.getElementById('historico') as HTMLDivElement;

function addHistorial(): void {

  const p = document.createElement("p");

  p.innerHTML = historico.length + ') &nbsp; &nbsp;' + historico[historico.length - 1];

  contenedorHistorico.appendChild(p);
}

function emptyHistory(): void {
  contenedorHistorico.innerHTML = '';

  historico = []
}
