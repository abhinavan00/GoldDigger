import fs from 'node:fs/promises'
import path from 'node:path'

export async function addNewInvestment(data) {
    const filePath = path.join('data', 'investmentHistory.txt')

    const formattedData = data.replace(/\s+/g, " ");

    try {
        const Content = await fs.appendFile(filePath, `${formattedData}\n`)
    } catch (err) {
        throw new Error('Unable to add Data: ${err}')
    }
}