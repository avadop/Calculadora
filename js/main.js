const operaciones = [
  {
    funcion: function (a,b) {
      return a+b;
    },
    operando: ' + '
  },
  {
    funcion: function (a,b){
      return a*b;
    },
    operando: ' * '
  }, 
  {
    funcion: function (a,b) {
      return a - b;
    },
    operando: ' - '
  }];

let historico = [];

let historialItem = '';

let operacion = [];

let numero = '';

let resultado = '';

const pantalla = document.getElementById('pantalla');

function clickBoton(value) {

  switch (value) {
    case '+':
      operacion.push(+numero)
      operacion.push(operaciones[0].funcion);
    
      historialItem += operaciones[0].operando;

      numero = '';
      break;

    case '-':
      operacion.push(+numero)
      operacion.push(operaciones[2].funcion);

      historialItem += operaciones[2].operando;

      numero = '';
      break;

    case '*':
      operacion.push(+numero)
      operacion.push(operaciones[1].funcion);

      historialItem += operaciones[1].operando;

      numero = '';
      break;

    case '=':
      operacion.push(+numero);

      resultado = calcular(operacion);

      historico.push(historialItem + ' = ' + resultado);
      addHistorial();

      historialItem = '';

      numero = '';
      operacion = [];
      break;

    case 'C':
      resultado = '0'
      operacion = [];
      numero = '';
      historialItem = '';
      break;

    default:
      resultado = '';
      numero += value;
      historialItem += value;
      break;
  }
  if(resultado === '') pantalla.innerText = historialItem;
  else pantalla.innerText = resultado;
  
}

function calcular(operacion){
  let resultadoOp = operacion[0];

  for(let i = 1; i < operacion.length; i+=2){
    resultadoOp = operacion[i](resultadoOp, operacion[i+1]);
  }

  return resultadoOp;
}

const contenedorHistorico = document.getElementById('historico')

function addHistorial (){

  const p = document.createElement("p");

  p.innerHTML = historico.length + ') &nbsp; &nbsp;' +historico[historico.length -1];

  contenedorHistorico.appendChild(p);
 }

function emptyHistory() {
  contenedorHistorico.innerHTML = '';
}
