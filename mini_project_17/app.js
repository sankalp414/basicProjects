//movement animation

const card = document.querySelector('.card')
const container = document.querySelector('.container')

container.addEventListener('mousemove',(e)=>{
  let xAxis = ((window.innerWidth/2)-e.pageX)/10;
  let yAxis = ((window.innerHeight/2)-e.pageY)/10;
  console.log(xAxis,yAxis);
   card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
})
//animate in

container.addEventListener('mouseenter',()=>{
    card.style.transition = 'none'
})

//animate out
container.addEventListener('mouseleave',()=>{
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
})