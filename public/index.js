const investBtn = document.getElementById('invest-btn');
const investmentAmount = document.getElementById('investment-amount');
const priceDisplay = document.getElementById('price-display');

investBtn.addEventListener('click', async function() {
    const amount = investmentAmount.value
    const price = priceDisplay.textContent
    const goldSold = Number(amount)/Number(price)
    const content = `
        ${new Date()}, 
        amount paid: ${amount}, 
        price per oz: ${price} , 
        gold sold: ${goldSold.toFixed(4)} 
    `
    
    const res = await fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: content
    })
    const data = await (res.text())
    console.log(data)
})