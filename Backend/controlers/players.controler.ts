const Player = require('../models/player.schema')
import { PlayerSchema } from '../models/player.schema'
import { faker } from '@faker-js/faker'

const updateById = async (id: any) => {
  const score = faker.datatype.number({
    min: 0,
    max: 500,
  })
  await Player.findByIdAndUpdate(id, { score })
}

export const randomInputScore = async () => {
  const count = await Player.count()
  const random = Math.floor(Math.random() * count) % count
  const foundUsers: typeof PlayerSchema = await Player.findOne().skip(random)
  updateById(foundUsers._id)
}

const calculateSkip = (page: number, itemsPerPage: number) => {
  return itemsPerPage * (page - 1)
}

export async function getPlayers(
  page: number,
  itemsPerPage: number,
  nickName?: string,
): Promise<any> {
  const foundUsers = await Player.find(
    nickName ? { nick: { $regex: `/${nickName}/` } } : {},
  )
    .sort({ score: -1 })
    .limit(itemsPerPage)
    .skip(calculateSkip(page, itemsPerPage))

    .then((result: any) => {
      return result
    })
    .catch((err: any) => {})

  const usersCount = await Player.find({}).count()
  console.log('foundUsers', foundUsers, nickName ? { nick: `/Dr/` } : {})

  return { data: foundUsers, lenght: usersCount }
}

const getRandomPlayer = (): typeof PlayerSchema => {
  const nick = faker.name.fullName()
  const score = faker.datatype.number({
    min: 0,
    max: 500,
  })
  const colors = ['blue', 'red', 'orange', 'green', 'white', 'black', 'pink']
  const color = colors[Math.floor(Math.random() * colors.length)]

  return { nick, score, color }
}

export const addPlayer = () => {
  const data: typeof PlayerSchema = getRandomPlayer()
  const player = new Player(data)
  player.save()
}
