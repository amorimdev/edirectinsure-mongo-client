'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const Model = new Schema({
  status: {
    type: String,
    enum: [ 'open', 'closed' ],
    default: 'open'
  },
  description: {
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
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project',
    required: true
  }
})

module.exports = Mongoose.model('task', Model)
