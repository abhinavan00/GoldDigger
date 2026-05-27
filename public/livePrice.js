const eventSource = new EventSource('http://localhost:8000/api/liveprice')

const priceDisplay = document.getElementById('price-display');
const connectionStatus = document.getElementById('connection-status');

// HANDLE LIVE PRICE UPDATe
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    const price = data.price
    priceDisplay.textContent = price
}

// HANDLE CONNECTION LOSS
eventSource.onerror = () => {
    connectionStatus.textContent = `Offline 🔴`
    console.log('Connection Lost. Attempting to reconnect...')
}