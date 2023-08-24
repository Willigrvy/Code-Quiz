 var btn = document.getElementById('btn');
 var startbtn = document.getElementById('startbtn')
 var remainingtime = document.getElementById('remaining Time')
 var timer = 120

 var Questions = [

 ]
var Answer1 =[

]
var Answer2 = [

]
var Answer3 = [

]
 var Answer4 = [

 ]





 //timer function should countdown to 0

var timeInterval =setInterval(function(){
    if(timeLeft > 0) {
        timer.textContent = timer;
        timeLeft--;
    }
})

if (state === hidden) {
    element.textContent =element.dataset.number;
    element.dataset.state = "visible"}
    else{

        element.textContent ="";
        element.setAttribute("data-state" , "hidden")
    }



 


//this should give an answer to the 
 function questionAnswer (){
 if ( answer = true) {
    return "correct"
 }
else if (answer ===false){
    return "incorrect"
}
}
 

 
 startbtn.addEventListener("click", function(event){
setInterval()
 })
 
 
