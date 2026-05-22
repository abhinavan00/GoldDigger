import fs from 'node:fs/promises';
import path from 'node:path';
import { sendResponse } from "./sendResponse.js";

export async function serveStatic(req, res, baseDir) {

    const publicDir = path.join(baseDir, 'public')
    const filePath = path.join(
        publicDir,
        req.url === '/' ? 'index.html' : req.url
    )

    try {

        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)

    } catch (err) {

    }

}