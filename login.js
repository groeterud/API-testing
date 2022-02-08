//kan tenkes at noe av dette ikke funker i react pga node js, da må vi bruke: https://www.educative.io/edpresso/how-to-set-headers-in-request-in-nodejs

var myHeaders = new Headers(); // lager ny header
myHeaders.append('username', 'geir'); //legger til brukernavnet - MÅ HETE USERNAME
myHeaders.append('password','Rq2AAz6HcH2EDCv') //legger til passordet - MÅ HETE PASSWORD

// ikke tenk på det
var myInit = {
method: 'GET',
headers: myHeaders,
mode: 'cors',
cache: 'default'
};


//Hvilket endpoint vi skal requeste, og hvilken header info vi skal sende med
var myRequest = new Request('http://127.0.0.1:8000/login', myInit);

//sender requesten og henter ut svaret
fetch(myRequest).then(function(response) {
    return response.json();
})
.then(function(parsedData) {
    if(parsedData===0){ //dersom vi returner NULL fra apiet
        console.log('No user found')
    }
    else {
        let token = parsedData['token'] // lagrer token fra responsen i variabel
        document.cookie = 'token='+token // og storer den i cookie
    }
})




        