
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          
      switch (buttonInnerHTML) {
          case "w":
               var tom1 = new Audio("sounds/tom-1.mp3");
               tom1.play();
               break;

          case "a":
              var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
              break;

          case "s":
              var tom3 = newAudio('sounds/tom-3.mp3');
              tom3.play();
              break;

         case "d":
             var tom4 = newAudio('sounds/tom-4.mp3');
             tom4.play();
             break;

        case "j":
            var snare = newAudio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = newAudio('sounds/crash.mp3');
            snare.play();
            break;

        case "l":
        var kick = newAudio('kick/.mp3');
        snare.play();
        break;

      
          default:
              break;
      }

    });
}










// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play(".drum");