const card = document.createElement('card');


card.id = 'card';

card.innerHTML = "<p>Hello this is Sankalp Sharma</p>";

document.body.appendChild(card);

fetch('api.javascripttutorial.net/v1/quotes/?page=1&limit=10 ')
    .then((response)=> {
        if(response.ok){
            return response.json()
        }else{
            throw new ERROR("API response not OK");
        }
    }
)
.then((data)=>{
    console.log(data);
    displayCocketail(data);
})
.catch((error)=>{
    console.error("FETCH error:", error);
});

