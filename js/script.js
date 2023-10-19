// Raccolta dati al click
const search = document.getElementById("search");
search.addEventListener("click", function () {
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

  //Condizione sconto
  if (userAge > 65) {
    finalPrice = basePrice * 0.6;
    console.log(finalPrice);
  } else if (userAge < 18) {
    finalPrice = basePrice * 0.8;
    console.log(finalPrice);
  } else {
    finalPrice = basePrice;
    console.log(finalPrice);
  }
});
