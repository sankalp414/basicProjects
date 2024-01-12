const searchTermElem = document.getElementById('searchTerm')
const searchResultElem = document.getElementById('searchResult')


searchTermElem.focus()


searchTermElem.addEventListener('input',(e)=>{
    console.log(e.target.value);
})