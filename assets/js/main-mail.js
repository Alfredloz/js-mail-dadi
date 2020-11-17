// array mail list
var maiList = ['gino_paoli@gmail.com', 'cicciopasticcio@gmail.com', 'presidentegalattico@gmail.com', 'southpark_major@gmail.com'];

console.log(maiList);

//creazione var
var mailInput = document.getElementById('mailpush');

//listener
var sendMail = document.getElementById('sendmail');
sendMail.addEventListener('click', function() {

  //selezione value mail
  var mailRequest = mailInput.value;
  //condizione mail accettata
  for (var i = 0; i < maiList.length; i++) {
    if (mailRequest == maiList[i]) {
      console.log('passato');
      alert('mail corretta!');
      break;
    }
  }
  console.log(i);
  if (i == maiList.length) {
    console.log('mail sbagliata');
  }


})
