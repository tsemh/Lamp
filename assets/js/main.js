const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const back = document.getElementById('backLamp');
const lamp = document.getElementById('lamp');

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
  if(!isLampBroken()) {
  lamp.src = "assets/img/ligada.jpg";
  }
}
function lampOff() {
  if(!isLampBroken()) {
  lamp.src = "assets/img/desligada.jpg";
  }
}
function lampBreak() {
  lamp.src = "assets/img/quebrada.jpg";
}

function backLamp() {
  if(isLampBroken()) {
    lamp.src = "assets/img/desligada.jpg";
  }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
back.addEventListener('click', backLamp);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBreak);