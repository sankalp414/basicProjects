const btn = document.getElementById("btt");

const randomNumber = function(number){
    return Math.floor(Math.random() * (number+1))
} 


btn.addEventListener("mouseover",()=>{
    const rndCol = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`
    document.body.style.backgroundColor = rndCol;

});
