
const urlStarWar = 'https://swapi.dev/api/'

function getElement(element){ //Função para pegar o elemento HTML(id ou class)

    return document.querySelector(element);
}

const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.info'),
      erroMessage = getElement('.error');

var personName,
    person,
    card;

function requestPersonInfo(url,nameP){
    fetch(url + nameP) //O fetch tem como argumento a url e o nome do pokemon,realizando uma concatenação
    .then(response => response.json()) // Recebe a resposta converte a resposta em um objeto json
    .then(data =>{ person = data}) //Recebe a resposta e coloca  em uma variavel
    .catch(err => console.log(err))
}
 function createCard(){
    card =  `
    <div class = "person-info">
    <h1 class = "name">Name :${person.name}</h1>
    <h2 class = "birth-year">Birth Year:${person.birth_year}</h2>
    <h3 class = "eye-color">Eye Color:${person.eye_color}</h3>

    </div>
      `
      return card
 }

 function startApp(personName){
     requestPersonInfo(urlStarWar,personName)
             setTimeout(function(){
            container.innerHTML =createCard()
         },200)
         
     }
     searchButton.addEventListener('click',event =>{
        event.preventDefault()
        personName= searchInput.value.toLowerCase()
        requestPersonInfo(urlStarWar,personName)
        startApp(personName)
    })
 
