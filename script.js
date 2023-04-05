const currencyForm = document.getElementById("currency-form");
const convertButton = document.getElementById("convert-button");
const resultDiv = document.getElementById("result");

currencyForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  if (fromCurrency === toCurrency) {
    resultDiv.innerHTML = "Please choose different currencies";
    return;
  }

  convertCurrency(amount, fromCurrency, toCurrency)
    .then(function(result) {
      resultDiv.innerHTML = amount + " " + fromCurrency + " = " + result + " " + toCurrency;
    })
    .catch(function(error) {
      console.log(error);
      resultDiv.innerHTML = "Something went wrong. Please try again later.";
    });
});

async function convertCurrency(amount, fromCurrency, toCurrency
