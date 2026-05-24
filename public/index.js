const investForm = document.getElementById('invest-form')
const investmentAmount = document.getElementById('investment-amount');
const priceDisplay = document.getElementById('price-display');

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
        const data = await (res.text())
        console.log(data)

    } catch(err) {
        console.log(err)
    }
})