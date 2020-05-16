var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector(".p2");
var p1Display=document.querySelector("#p1display");
var p2Display=document.querySelector("#p2display");
var resetButton=document.querySelector("#reset");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");

var p1Score=0;
var p2Score=0;
var winningScore=5;
var gameover=false;

p1Button.addEventListener("click",function(){
 
  if(!gameover)
   {  p1Score++;
     p1Display.textContent=p1Score;

    if(p1Score===winningScore)
      { p1Display.classList.add("winner");
       gameover=true;
      }
    }     

});

p2Button.addEventListener("click",function(){
 
 if(!gameover)
   {
      p2Score++;
      p2Display.textContent=p2Score; 

    if(p2Score===winningScore)
      { 
       p2Display.classList.add("winner");	
       gameover=true;
       } 
    }    
});

resetButton.addEventListener("click",function(){
 
   reset();
});

 
 function reset(){
 
 p1Score = 0;
 p2Score = 0;
 p1Display.textContent=0;
 p2Display.textContent=0;
 p1Display.classList.remove("winner");
 p2Display.classList.remove("winner");
gameover=false;

 }

numInput.addEventListener("change",function(){
winningScoreDisplay.textContent=numInput.value;
winningScore=Number(numInput.value);
reset();

});