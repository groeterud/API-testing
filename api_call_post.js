import { getCookie } from "./getcookie.js"; //importere funksjonen for å hente ut cookies

//henter token cookien 
let token = getCookie('token')

if (token === "") {
    console.log('empty token')
}

let serienummer = "83776b9e-a6d9-4b0e-ad28-4150b760525b"

var myHeaders = new Headers(); // lager ny header
myHeaders.append('token',token) //passer token infoet i headeren til API requesten for å vise at vi har lov 
myHeaders.append('nyttutlaan',serienummer)

// ikke tenk på det
var myInit = {
method: 'POST',
headers: myHeaders,
mode: 'cors',
cache: 'default'
};


//Hvilket endpoint vi skal requeste, og hvilken header info vi skal sende med
var myRequest = new Request('http://127.0.0.1:8000/nyttUtlaan', myInit); //ENDRE URLEN

//sender requesten og henter ut svaret
fetch(myRequest).then(function(response) {
    return response.json(); 
})
.then(function(parsedData) { 
   for (var objekt of Object.keys(parsedData)) { // GJØR HVA DU VIL MED RESPONSEN
       if(parsedData[objekt]==="OK") {
           console.log('Produktet er nå utlånt på personen vår')
       }
       else {
           console.log('Noe gikk galt')
       }
   }
})
