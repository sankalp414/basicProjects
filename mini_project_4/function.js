const btn = document.getElementById("btt"); // this will select the id of the button
const colorNum = document.getElementById("color")
const randomNumber = function(number){ // by this function we will get a randomNumber
    return Math.floor(Math.random() * (number+1));
} 


btn.addEventListener("click",()=>{ // this an evenListener which is made to react on the event happened in the system by the user
    const rndCol = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`; //now that function we will use its output here to make a random color  
    document.body.style.backgroundColor = rndCol; //now that random color will be in the background of the page
    console.log(rndCol);
    colorNum.innerHTML = `${rndCol}`; // thiswill show the rgb value of the current color
    //console.log(num);

});
