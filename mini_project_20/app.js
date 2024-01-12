const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup',()=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value=''
        },100)
    }
})

function createTags(input){
    const tagsEl = input.split(',').filter(tag=>tag.trim()!== '').map(tag=> tag.trim())
    console.log(tagsEl);

    tagsEl.innerHTML = ''

    tagsEl.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
        
    });


}


function randomSelect(){
    const times = 30
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(()=>{
            unhightlightTag(randomTag)
        },100)
    },100);

}


function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')

}

function unhightlightTag(tag){
    tag.classList.remove('highlight')
}