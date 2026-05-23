import { EventEmitter } from 'node:events'
import { createEventAlert } from '../utils/createEventAlert.js'

export const investmentEvents = new EventEmitter()

investmentEvents.on('new investment added', createEventAlert)