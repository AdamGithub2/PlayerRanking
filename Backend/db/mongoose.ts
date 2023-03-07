//mongose
const mongoose = require('mongoose')
const url: string = 'mongodb://localhost:27017/'
const dbname: string = 'PlayerRankingDB'
mongoose.connect(url + dbname, {})
