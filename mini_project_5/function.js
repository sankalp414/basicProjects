function updateClock(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = (seconds/60)*360; 
    const minuteDegree = ((minutes + seconds/60)/60) *360; 
    const hourDegree = ((hours%12 + minutes/60)/12)*360; 

    const secondHand = document.querySelector(".secondHand");
    const minuteHand = document.querySelector(".minuteHand");
    const hourHand = document.querySelector(".hourHand");

    secondHand.style.transform = `rotate(${secondHand}deg)`;
    minuteHand.style.transform = `rotate(${minuteHand}deg)`;
    hourHand.style.transform = `rotate(${hourHand}deg)`;

}
setInterval(updateClock, 1000);

updateClock();