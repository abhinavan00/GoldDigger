import fs from 'node:fs/promises';
import path from 'node:path';
import { sendResponse } from "./sendResponse.js";

export function serveStatic(req, res) {
   sendResponse(res, 200, 'text/html', '<h1>Hello from the Server!</h1>')
}