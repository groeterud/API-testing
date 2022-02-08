# API-testing
Hvordan bruke API er strukturert:

##login
- Login sender api kall med brukernavn og pass i header av requesten.
- Om brukeren finnes gir api tilbake en token som er knyttet til brukeren
- Dette tokenet lagres i en cookie på maskinen til brukeren. 

##api kall
- henter tokenet fra cookien
- sender tokenet i header av requesten 
- om tokenet finnes gis en respons, ellers tulledata

