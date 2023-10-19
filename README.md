##Esercizio

Descrizione:
Scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
  MILESTONE 1:
  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
  MILESTONE 2:
  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

**Preparo il codice html**

1. creo 2 input dove inserire i km e l'età del passeggero
2. creo un bottone per creare il biglietto

**JS**

**Raccolta dati**

1. inserisco in una variabile i dati dei km inseriti dall'utente:
   const userKm = parseInt(getElementById().innerHtml);

2. Inserisco in una variabile l'età del passeggero inseirta dall'utente:
   const userAge = parseInt(getElementById().innerHtml);

**Logica**

1. Inizializzo il price moltiplicando la distanza scelta dall'utente per 0.21:
   let basePrice = userKm \* 0.21;

2. Creo la variabile finalPrice:
   let finalPrice;

3. Verifico l'età inserita:

SE userAge > di 65 allora
finalPrice = basePrice \* 0.6;

ALTRIMENTI SE userAge < 18 allora
finalPrice = basePrice \* 0.8;

ALTRIMENTI
finalPrice = basePrice;

4. Preparo il messaggio finale

**output**
