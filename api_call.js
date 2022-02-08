import { getCookie } from "./getcookie.js"; //importere funksjonen for å hente ut cookies

//henter token cookien 
let token = getCookie('token')

if (token === "") {
    console.log('empty token')
}

var myHeaders = new Headers(); // lager ny header
myHeaders.append('token',token) //passer token infoet i headeren til API requesten for å vise at vi har lov 

// ikke tenk på det
var myInit = {
method: 'GET',
headers: myHeaders,
mode: 'cors',
cache: 'default'
};


//Hvilket endpoint vi skal requeste, og hvilken header info vi skal sende med
var myRequest = new Request('http://127.0.0.1:8000/getUtlaan', myInit); //ENDRE URLEN

//sender requesten og henter ut svaret
fetch(myRequest).then(function(response) {
    return response.json(); 
})
.then(function(parsedData) {
   for (var objekt of Object.keys(parsedData)) { // GJØR HVA DU VIL MED RESPONSEN
       console.log("Vare: "+objekt + "\nserienummer: "+ parsedData[objekt]+"\n") //henter hver enkelt oppføring i responsen 
   }
})
