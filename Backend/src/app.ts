import express, { Application, Request, Response } from 'express'
const mongoose = require('../db/mongoose')
const Player = require('../models/player.schema')
import {
  getPlayers,
  addPlayer,
  randomInputScore,
} from '../controlers/players.controler'
const cron = require('node-cron')
var cors = require('cors')

const app: Application = express()

const port: number = 3001

app.use(cors())

cron.schedule('*/10 * * * * *', () => {
  randomInputScore()
})

app.get('/add', (req: Request, res: Response) => {
  addPlayer()
  res.send('New player added')
})

app.get('/list', async (req: Request, res: Response) => {
  const page = req.query.page
  const perPage = req.query.numberPerPage
  const foundUsers = await getPlayers(Number(page), Number(perPage))
  res.send(foundUsers)
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})
