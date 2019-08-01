'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Model = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date().getTime()
  },
  updatedAt: {
    type: Date
  },
  projects: [ {
    type: Schema.Types.ObjectId,
    ref: 'project'
  } ]
})

module.exports = Mongoose.model('user', Model)
