
function moneyIncreaser(inputGivenSource, inputId) {
    let typeOfBalance = parseFloat(document.getElementById(inputGivenSource).innerText)
    let typeOfamount = parseFloat(document.getElementById(inputId).value)
    let calculation = typeOfBalance + typeOfamount
    document.getElementById(inputGivenSource).innerText = calculation.toString()
}
function moneyDecreaser(inputId) {
    let typeOfBalance = parseFloat(document.getElementById("availableBalance").innerText)
    let typeOfamount = parseFloat(document.getElementById(inputId).value)
    let calculation = typeOfBalance - typeOfamount
    document.getElementById("availableBalance").innerText = calculation.toString()
}
