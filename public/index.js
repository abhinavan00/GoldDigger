const investForm = document.getElementById('invest-form')
const investmentAmount = document.getElementById('investment-amount');
const priceDisplay = document.getElementById('price-display');
const dialogModal = document.querySelector('dialog');
const dialogModalBtn = document.getElementById('dialog-modal-btn');
const investmentSummary = document.getElementById('investment-summary')

investForm.addEventListener('submit', async function(e) {
    e.preventDefault()
    const amount = investmentAmount.value
    const price = priceDisplay.textContent
    const goldSold = Number(amount)/Number(price)
    const content = `
        ${new Date().toISOString()}, 
        amount paid: ￡${amount}, 
        price per Oz: ￡${price} , 
        gold sold: ${goldSold.toFixed(4)} Oz 
    `
    try{
        const res = await fetch('./api', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: content
        })
        const data = await (res.json())

        console.log(data)

        dialogModal.showModal()
        investmentSummary.textContent = `
            You just bought ${goldSold.toFixed(4)} ounces (ozt) for £${amount}. \n You will receive documentation shortly.
        `

    } catch(err) {
        console.log(err)
    }
})

dialogModalBtn.addEventListener('click', function() {
    dialogModal.close()
    investForm.reset()
})