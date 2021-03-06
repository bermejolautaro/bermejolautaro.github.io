// Necesario contar con conocimiento de al menos uno de estos lenguajes:
//
//     Javascript
//     Java
//     GO
//     Python
//     HTML
//
// Experiencia deseable (no excluyente) con:
//
//     Google Analytics
//     Google Tag Manager
//     Firebase Analytics
//     jQuery
//     R
//     Google Cloud (o similares: Amazon Web Services, Microsoft Azure, Oracle Cloudera)


let buttons = document.querySelectorAll(".button");
let sounds = document.querySelectorAll("audio");

//Defino la funcion playAudio que dice como debe ser reproducido un audio
function playAudio(event){
  let audio = event.target.parentElement.getElementsByTagName("audio")[0];
  let soundName = event.target.parentElement.getElementsByClassName("button-caption")[0].textContent;
  console.log('botonesDeAudio' + ' - ' +  soundName);
  sounds.forEach(function(sound){
    sound.pause();
    sound.currentTime = 0;
  });

  //Envio informacion sobre el boton a Google Analytics
  // dataLayer.push({
  //   'event' : 'clickBoton',
  //   'event_category' : 'botonesDeAudio' + ' - ' +  soundName,
  //   'event_label' : 'Reproducir',
  //   'value' : 1
  // });

  audio.play();
}

//Le agrega a todos los botones un evento CLICK que llama al meto playAudio
buttons.forEach(btn => btn.addEventListener("click", playAudio));


//Silenciar todos los sonidos
window.addEventListener("keydown", function(e){
  console.log(e.keyCode);
  if(e.keyCode == 27){ //Si presiona la tecla ESC
    console.log("Funcionando");
    sounds.forEach(function(sound){
      sound.pause();
      sound.currentTime = 0;
    });
  }
});
