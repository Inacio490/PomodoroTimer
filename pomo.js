const display = document.querySelector('#counter');
display.innerHTML = '25 : 00';
console.log(display);

var buffer_seconds; // Memória padrão para os segundos
var hh = 0;
var mm = 0;
var ss = 0;
let seconds;
let minutes;
let typeOfPomo;
let interval;
let toCount = false;
let checkClick = false; 


var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;


function check(task) {

  switch (task) {
    case "start":
      Start();
      break;
    case "Rest":
      shortRest();
      break;
    case "lrest":
      longRest();
      break;
    case "stop":
      pause();
      break;
    case "continue":
      continueStart();
      break;
 
  }
}

// Função para chamar a contagem específica para um ciclo de trabalho
function Start() {
    buffer_seconds = 1500; // 25 minutos em segundos
    counting();
    console.log('Chegueieiie');
}


// Descanso Curto
function shortRest() {
  buffer_seconds = 300; // 5 minutos em segundos
  if (checkClick == false) {
    toCount = true;
    couting();
    checkClick = true;
  }
}


// Descanso longo
function longRest() {
  buffer_seconds = 600;
  console.log(checkClick);
  if (checkClick == false) {
    toCount = true;
    couting();
    checkClick = true;
  }
}


// Função que pausa a contagem
function pause() {
  toCount = false;
}

// Função que despausa a contagem
function continueStart() {
  toCount = true;
}


// Transforma os segundos e minutos e os colaca na tela. Chama a função de contagem principal
function counting() {
    typeOfPomo = buffer_seconds;
    toCount = true;
    interval = setInterval(count, 1000);

    console.log('cheguei ate aqui');

}

// Tira 1 segundo do buffer_seconds e depois reimprime os minutos na tela
function count() {

  if (buffer_seconds > 0) {
    if (toCount == true) {
      buffer_seconds--;
      seconds = buffer_seconds % 60;
      minutes = Math.floor(buffer_seconds / 60);
      let time = addZero(minutes, seconds);
      display.innerHTML = time[0] + " : " + time[1];
    }
  }
}

// Função para o acrescenta 0 em números menores que 10
function addZero(minutes, seconds) {

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return [minutes, seconds];
}


