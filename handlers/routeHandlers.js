import { prices } from "../data/prices.js"
import { sendResponse } from "../utils/sendResponse.js"
import { getRequestData } from "../utils/getRequestData.js"
import { sanitizeReceivedData } from "../utils/sanitizeReceivedData.js";
import { addNewInvestment } from "../utils/addNewInvestment.js";
import { investmentEvents } from "../events/newInvestmentEvent.js";

// Handle Post request
export async function handlePost(req, res) {
    try {
        const textBody = await getRequestData(req);
        const cleanTextBody = sanitizeReceivedData(textBody)
        addNewInvestment(cleanTextBody)
        investmentEvents.emit('new investment added', cleanTextBody)
        sendResponse(res, 201, 'application/json', cleanTextBody)

    } catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}) )
    }
}

// Handle Live Price Update
export function handleLivePrice(res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * prices.length)

        res.write(
            `data: ${JSON.stringify({
                event: 'price-update',
                price: prices[randomIndex]
            })} \n\n`
        )
    }, 4000)
}