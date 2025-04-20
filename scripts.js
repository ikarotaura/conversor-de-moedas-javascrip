


const convertButton = document.querySelector(".convert-button")
const currencySelector = document.querySelector(".currency-selector")


function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueReal = document.querySelector(".currency-valvue-real") //valor em real 
    const currencyvelue = document.querySelector(".currency-valvue") //outras moedas


    console.log(currencySelector.value)


    const dolarToday = 5.2
    const euroToday = 6.2
    const libratoday = 7.2
    const bitcoinToday = 4.2

    if (currencySelector.value == "dolar") {
        currencyvelue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelector.value == "euro") {
        currencyvelue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

if (currencySelector.value == "libra") {
    currencyvelue.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "UK"

    }).format(inputCurrencyValue / libratoday)
}
    if (currencySelector.value == "bitcoin") {
        currencyvelue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "BTC"
    
        }).format(inputCurrencyValue / bitcoinToday)


}

    currencyValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)




}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector (".currency-img")



   if (currencySelector.value == "dolar") {
     currencyName.innerHTML = "dolar americano "
    currencyImage.src="assets/dolar.png"
}

  if (currencySelector.value == "euro") {
     currencyName.innerHTML = "euro "
     currencyImage.src = "assets/euro.png"
     

}  
if (currencySelector.value == "libra") {
    currencyName.innerHTML = "libra "
    currencyImage.src = "assets/libra 1@2x.png" 



}  

if (currencySelector.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin "
    currencyImage.src = "assets/bitcoin .png" 



}  

}
    currencySelector.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValue)

