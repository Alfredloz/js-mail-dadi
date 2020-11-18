//creazione var
var playerD = document.getElementById('player_d');
var botD = document.getElementById('bot_d');
var result = document.getElementById('result');


//creare i bottoni per generare i dadi
// bottone per giocare
var btnPlay = document.getElementById('game');
btnPlay.addEventListener('click', function() {
  //lancio dado giocatore
  var playerDice = Number(Math.floor(Math.random() * 6) + 1);
  //lancio dado bot
  var botDice = Number(Math.floor(Math.random() * 6) + 1);

  //inserimento dati nelle rispettive caselle
  document.getElementById('player_d').innerHTML= playerDice;
  document.getElementById('bot_d').innerHTML= botDice;

  //dichiarazioni di vincita o perdita
  if (playerDice > botDice) {
    result.innerHTML= 'hai vinto!';
  } else if (playerDice == botDice) {
    result.innerHTML= 'avete pareggiato!';
  } else {
    result.innerHTML='hai trumpato alla grande!';
  }
})
//bottone per ricominciare
var reset = document.getElementById('reset');
reset.addEventListener('click', function() {
  //reset delle caselle
  playerD.innerHTML = '';
  botD.innerHTML = '';
  result.innerHTML = '';
})
