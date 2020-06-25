let historico = [];

let historialItem = '';

let operacion = '';

let resultado = '';

const pantalla = document.getElementById('pantalla');

function clickBoton(value) {

  switch (value) {
    case '=':
      resultado = eval(operacion);

      historico.push(historialItem + ' = ' + resultado);
      addHistorial();

      historialItem = '';

      operacion = '';
      break;

    case 'C':
      resultado = '0';
      operacion = '';
      historialItem = '';
      break;

    default:
      resultado = '';
      operacion += value;
      historialItem += value;
      break;
  }
  if(resultado === '') pantalla.innerText = historialItem;
  else pantalla.innerText = resultado;
  
}

const contenedorHistorico = document.getElementById('historico')

function addHistorial (){

  const p = document.createElement("p");

  p.innerHTML = historico.length + ') &nbsp; &nbsp;' + historico[historico.length -1];

  contenedorHistorico.appendChild(p);
 }

function emptyHistory() {
  contenedorHistorico.innerHTML = '';

  historico = []
}
