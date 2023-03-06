const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectId

export const PlayerSchema = new mongoose.Schema({
  //   _id: {
  //     type: ObjectID,
  //   },
  nick: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  score: {
    type: Number,
    max: 10000,
  },
})

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player
