let i=0;
let demo = document.getElementById('demo');
let txt = 'I am a web developer';
let speed = 50;

function typeWriter(){
    if(i<txt.length){
        demo.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}