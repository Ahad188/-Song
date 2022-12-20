var len = document.querySelectorAll(".btn").length;
for(var i = 0; i < len; i++){
     document.querySelectorAll(".btn")[i].addEventListener("click",function(){
          var text = this.innerHTML;
          console.log(text);
           audioPlay(text);
     })
}
function audioPlay(text){
     switch(text){
          case "Barshet":
          var audio = new Audio("./sound/barsat.mp3");
          audio.play();
          break;
          case "Meri":
          var audio = new Audio("./sound/meri.mp3");
          audio.play();
          break;
          case "Nobel":
          var audio = new Audio("./sound/nobel.mp3");
          audio.play();
          break;
     }
}