const userName = document.getElementById("name");
const userKm = document.getElementById("km");
const userAge = document.getElementById("age");
//messagge
let messagge = document.querySelector(".ticket");

// Raccolta dati al click
const search = document.getElementById("search");
search.addEventListener("click", function () {
  //Nome e cognome
  const nameValue = userName.value;
  console.log(nameValue);
  //Km inseriti
  const userKmValue = parseInt(userKm.value);
  console.log(userKm, typeof userKm);
  // Età inserita
  const userAgeValue = parseInt(userAge.value);
  console.log(userAge, typeof userAge);

  //Logica

  //Prezzo di base
  let basePrice = userKmValue * 0.21;
  console.log(basePrice);
  //Prezzo finale
  let finalPrice;
  //Condizione sconto e Output

  //Over 65
  if (userAgeValue > 65) {
    finalPrice = basePrice * 0.6;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${nameValue} il tuo biglietto costava ${basePrice}€ e ora costa ${finalPrice}€, il tuo sconto è del 40% poichè sei un over 65, buon viaggio!`;
    //Minorenne
  } else if (userAgeValue < 18) {
    finalPrice = basePrice * 0.8;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${nameValue} il tuo biglietto costava ${basePrice}€ e ora costa ${finalPrice}€, il tuo sconto è del 20% poichè sei minorenne, buon viaggio!`;
  }
  //Tra 18 e 65
  else {
    finalPrice = basePrice;
    console.log(finalPrice);
    finalPrice = finalPrice.toFixed(2);
    basePrice = basePrice.toFixed(2);
    messagge.innerHTML = `${nameValue} il tuo biglietto costa ${finalPrice}€, buon viaggio!`;
  }
});

const none = document.getElementById("none");
console.log(none);
none.addEventListener("click", function (event) {
  event.preventDefault;
  console.log("ciao");
  userName.value = "";
  userKm.value = " ";
  userAge.value = " ";
  messagge.innerHTML = " ";
});
