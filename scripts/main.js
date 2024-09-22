const donationPage = document.getElementById("donationPageBtn")
const historyPage = document.getElementById("historyPageBtn")
historyPage.addEventListener("click", function () {
    historyPage.style.backgroundColor = "#B4F461"
    historyPage.style.color = "black"
    historyPage.style.borderColor = "#B4F461"
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
    donationPage.style.borderColor = "#B4F461"
    document.getElementById("donationWeb").style.display = "Block"
    document.getElementById("historyWeb").style.display = "none"
})
let i = 1
document.getElementById("donateNowNoakhali").addEventListener("click", function () {
    if (document.getElementById("inputAmountNoakhali").value != "" && parseFloat(document.getElementById("inputAmountNoakhali").value) <= parseFloat(document.getElementById("availableBalance").innerText) && !isNaN(parseFloat(document.getElementById("inputAmountNoakhali").value))) {
        my_modal_5.showModal()
        moneyDecreaser("inputAmountNoakhali")

        if (!i < 2) {
            document.getElementById("id404").style.display = "none"
            let div = document.createElement("div")
            div.innerHTML = `
    <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                        <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountNoakhali").value} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                        <p class="font-semibold text-gray-400">Donated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT+0600 (Bangladesh Standard Time)</p>
                    </div>
    `
            document.getElementById("historyWeb").appendChild(div)
            i++
            moneyIncreaser("givenNoakhali", "inputAmountNoakhali")
            document.getElementById("inputAmountNoakhali").value = ""
        }
    }
    else {
        alert("Invalid Amount")
    }

})
document.getElementById("donateNowFeni").addEventListener("click", function () {
    if (document.getElementById("inputAmountFeni").value != "" && parseFloat(document.getElementById("inputAmountFeni").value) <= parseFloat(document.getElementById("availableBalance").innerText) && !isNaN(parseFloat(document.getElementById("inputAmountFeni").value))) {
        my_modal_5.showModal()
        moneyDecreaser("inputAmountFeni")
        if (!i < 2) {
            document.getElementById("id404").style.display = "none"
            let div = document.createElement("div")
            div.innerHTML = `
        <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                            <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountFeni").value} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
                            <p class="font-semibold text-gray-400">Donated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT+0600 (Bangladesh Standard Time)</p>
                        </div>
        `
            document.getElementById("historyWeb").appendChild(div)
            i++
            moneyIncreaser("givenFeni", "inputAmountFeni")
            document.getElementById("inputAmountFeni").value = ""
        }

    }
    else {
        alert("Enter Proper Amount")
    }

})
document.getElementById("donateNowQuota").addEventListener("click", function () {
    if (document.getElementById("inputAmountQuota").value != "" && parseFloat(document.getElementById("inputAmountQuota").value) <= parseFloat(document.getElementById("availableBalance").innerText) && !isNaN(parseFloat(document.getElementById("inputAmountQuota").value))) {
        my_modal_5.showModal()
        moneyDecreaser("inputAmountQuota")
        if (!i < 2) {
            document.getElementById("id404").style.display = "none"
            let div = document.createElement("div")
            div.innerHTML = `
        <div class="mx-3 p-5 my-5 border border-gray-200 rounded-xl">
                            <p class="font-semibold text-lg mb-3">${document.getElementById("inputAmountQuota").value} Taka is Donated for Injured in the Quota movement</p>
                            <p class="font-semibold text-gray-400">Donated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} GMT+0600 (Bangladesh Standard Time)</p>
                        </div>
        `
            document.getElementById("historyWeb").appendChild(div)
            i++
            moneyIncreaser("givenQuota", "inputAmountQuota")
            document.getElementById("inputAmountQuota").value = ""
        }
    }
    else {
        alert("Enter Proper Amount")
    }



})

document.getElementById("blogBtn").addEventListener("click", function () {
    window.location.href = "https://tanjidshafin.github.io/Dom-quest-assignment/blog.html"
})

