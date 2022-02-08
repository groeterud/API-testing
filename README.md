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
på linjen : var myRequest = new Request('http://127.0.0.1:8000/getUtlaan', myInit); 
så endrer du EndPointet (adressen) til det EndPointet du trenger. Evt kan det tenkes du må legge til flere headere ved en POST request. 
Dernest må du såklart gjøre noe med det som kommer tilbake dersom det er en GET request. 
