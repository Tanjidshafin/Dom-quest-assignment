const donationPage = document.getElementById("donationPageBtn")
const historyPage = document.getElementById("historyPageBtn")
historyPage.addEventListener("click", function () {
    historyPage.style.backgroundColor = "#B4F461"
    historyPage.style.color = "black"
    historyPage.style.borderColor = "none"
    donationPage.style.backgroundColor = "white"
    donationPage.style.color = "#6b7280"
    donationPage.style.borderColor = "#9ca3af"
    document.getElementById("donationWeb").style.display = "none"
    document.getElementById("historyWeb").style.display = "block"

})
donationPage.addEventListener("click", function () {
    historyPage.style.backgroundColor = "white"
    historyPage.style.color = "#6b7280"
    historyPage.style.borderColor = "#9ca3af"
    donationPage.style.backgroundColor = "#B4F461"
    donationPage.style.color = "black"
    donationPage.style.borderColor = "none"
    document.getElementById("donationWeb").style.display = "Block"
    document.getElementById("historyWeb").style.display = "none"
})
let i = 1
document.getElementById("donateNowNoakhali").addEventListener("click", function () {
    moneyDecreaser("inputAmountNoakhali")
   

    if (!i < 2) {
        document.getElementById("id404").style.display = "none"
        let div = document.createElement("div")
        div.innerHTML = `
    <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                        <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountNoakhali").value} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                        <p class="font-semibold text-gray-400">Real Time</p>
                    </div>
    `
        document.getElementById("historyWeb").appendChild(div)
        i++
        moneyIncreaser("givenNoakhali", "inputAmountNoakhali")
         document.getElementById("inputAmountNoakhali").value = ""
    }

})
document.getElementById("donateNowFeni").addEventListener("click", function () {
    moneyDecreaser("inputAmountFeni")
    
    if (!i < 2) {
        document.getElementById("id404").style.display = "none"
        let div = document.createElement("div")
        div.innerHTML = `
    <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                        <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountFeni").value} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
                        <p class="font-semibold text-gray-400">Real Time</p>
                    </div>
    `
        document.getElementById("historyWeb").appendChild(div)
        i++
        moneyIncreaser("givenFeni", "inputAmountFeni")
        document.getElementById("inputAmountFeni").value = ""
    }

})
document.getElementById("donateNowQuota").addEventListener("click", function () {
    moneyDecreaser("inputAmountQuota")
    
    if (!i < 2) {
        document.getElementById("id404").style.display = "none"
        let div = document.createElement("div")
        div.innerHTML = `
    <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                        <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountQuota").value} Taka is Donated for Injured in the Quota movement</p>
                        <p class="font-semibold text-gray-400">Real Time</p>
                    </div>
    `
        document.getElementById("historyWeb").appendChild(div)
        i++
        moneyIncreaser("givenQuota", "inputAmountQuota")
        document.getElementById("inputAmountQuota").value = ""
    }


})

