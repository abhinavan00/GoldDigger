import { prices } from "../data/prices.js"
import { sendResponse } from "../utils/sendResponse.js"

// Handle Post request
export async function handlePost(req, res) {
    let body = ''
    for await(const chunks of req) {
        body += chunks
    }

    console.log(body)
    sendResponse(res, 200, 'text/plain', 'Hello from Server!')
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
    }, 10000)
}