'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Model = new Schema({
  name: {
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  tasks: [ {
    type: Schema.Types.ObjectId,
    ref: 'task'
  } ]
})

module.exports = Mongoose.model('project', Model)
