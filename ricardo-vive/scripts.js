let buttons = document.querySelectorAll(".button");
let sounds = document.querySelectorAll("audio");

function playAudio(event){
  let audio = event.target.parentElement.getElementsByTagName("audio")[0];
  sounds.forEach(function(sound){
    sound.pause();
    sound.currentTime = 0;
  });
  audio.play();
}

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
