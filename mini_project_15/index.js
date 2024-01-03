const div = document.getElementById('div')
const button = document.getElementById('button')

const myApiKey = 'OIyGFIJORG4BKu6vcMqdzQ==AB7sEssWX5ucYk4G'

const others = {
    method:'GET',
    headers:{
        'X-api-key':myApiKey,
    }

}
const apiUrl = 'https://api.api-ninjas.com/v1/jokes?limit=1';

button.addEventListener('click',(e)=>{
    
    getAllJokes()
})
async function getAllJokes(){
    
        const response = await fetch(apiUrl,others)
        const data= await response.json()
        console.log(data[0].joke);
        div.innerHTML = `${data[0].joke}`
    
}
