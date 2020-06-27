let historico = [];

let historialItem = '';

let operacion = '';

let resultado = '';

const botones = document.getElementsByClassName("operando");

const dot = document.getElementById("dot");

function disableOperations() {
  for (let boton of botones) {
    boton.disabled = true
  }
}

function enableOperations() {
  for (let boton of botones) {
    boton.disabled = false
  }
}

function enableDot() {
  console.log(dot)
  dot.disabled = false;
}

function disableDot() {
  dot.disabled = true;
}

const pantalla = document.getElementById('pantalla');

function clickBoton(value) {

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

const contenedorHistorico = document.getElementById('historico')

function addHistorial() {

  const p = document.createElement("p");

  p.innerHTML = historico.length + ') &nbsp; &nbsp;' + historico[historico.length - 1];

  contenedorHistorico.appendChild(p);
}

function emptyHistory() {
  contenedorHistorico.innerHTML = '';

  historico = []
}
