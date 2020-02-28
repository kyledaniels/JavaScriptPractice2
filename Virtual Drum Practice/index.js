
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
          
      switch (buttonInnerHTML) {
          case "w":
               var audio = new Audio("sounds/tom-1.mp3");
               audio.play();
               break;

          case "a":
              var audio = new Audio("sounds/tom-2.mp3");
              audio.play();
          case ""
      
          default:
              break;
      }

    });
}










// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play(".drum");