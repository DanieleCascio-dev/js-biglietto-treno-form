// Raccolta dati al click
const search = document.getElementById("search");
search.addEventListener("click", function () {
  //Nome e cognome
  const name = document.getElementById("name").value;
  console.log(name);
  //Km inseriti
  const userKm = parseInt(document.getElementById("km").value);
  console.log(userKm, typeof userKm);
  // Età inserita
  const userAge = parseInt(document.getElementById("age").value);
  console.log(userAge, typeof userAge);

  //Logica

  //Prezzo di base
  let basePrice = userKm * 0.21;
  console.log(basePrice);
  //Prezzo finale
  let finalPrice;
  //messagge
  let messagge = document.querySelector(".ticket");

  //Condizione sconto e Output

  //Over 65
  if (userAge > 65) {
    finalPrice = basePrice * 0.6;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${name} il tuo biglietto costava ${basePrice}€ e ora costa ${finalPrice}€, il tuo sconto è del 40% poichè sei un over 65, buon viaggio!`;
    //Minorenne
  } else if (userAge < 18) {
    finalPrice = basePrice * 0.8;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${name} il tuo biglietto costava ${basePrice}€ e ora costa ${finalPrice}€, il tuo sconto è del 20% poichè sei minorenne, buon viaggio!`;
  }
  //Tra 18 e 65
  else {
    finalPrice = basePrice;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${name} il tuo biglietto costa ${finalPrice}€, buon viaggio!`;
  }
});
