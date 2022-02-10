# API-testing
Hvordan bruke API er strukturert:

## login
- Login sender api kall med brukernavn og pass i header av requesten.
- Om brukeren finnes gir api tilbake en token som er knyttet til brukeren
- Dette tokenet lagres i en cookie på maskinen til brukeren. 

## api kall
- henter tokenet fra cookien
- sender tokenet i header av requesten 
- om tokenet finnes gis en respons, ellers tulledata




## hva må jeg endre for å gjøre api kal? 
på linjen : 
```Python
var myRequest = new Request('http://127.0.0.1:8000/getUtlaan', myInit); 
```
så endrer du EndPointet (adressen) til det EndPointet du trenger. Evt kan det tenkes du må legge til flere headere ved en POST request. 
Dernest må du såklart gjøre noe med det som kommer tilbake dersom det er en GET request. 


## filer og ansvar
login.js - sender API request hvor brukernavn og passord sendes med headeren. Får token tilbake og lagrer det som cookie. 

getcookie.js - inneholder funksjonen getCookie() som er stjålet fra JavaScript dokumentasjonen. Kan fint tas med inn i andre script. Funksjonen henter en cookie med et visst navn og returnerer innholdet som en String. 

api_call.js - henter tokenet fra cookien og sender en request med tokenet i headeren til APIet. Inneholder også boiler-plate kode for å gjøre noe med svar fra API kallet. 

main.py - inneholder et enkelt API skrevet for FastAPI som viser hvordan vi henter ut info fra headeren som kom med requesten og returner en dict/JSON respons. 

test.html - bare tom javascript fil som importer og kjører login.js og api_call.js slik at man kan teste at alt fungerer. Merk at api_call.js MÅ ha type="module" fordi den importerer en annen funksjon (getCookie()) - uten dette får du error, noe å ha med seg videre. 


Hyl ut om noe er uklart eller trenger videre forklaring. 
