'use strict'

const mongoose = require('mongoose')
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/edirectinsure'
const config = { useNewUrlParser: true, useFindAndModify: true }
const LOG_TAG = 'LOG::[USER | MONGO]'

module.exports.mongoClient = seneca => new Promise((resolve, reject) => {
  try {
    if (seneca.mongoClient) {
      return resolve(seneca.mongoClient)
    }

    mongoose.set('debug', true)

    return mongoose.connect(url, config, (err, connection) => {
      if (err) {
        seneca.log.fatal(LOG_TAG, err.message || err)
        return reject(err)
      }

      seneca.log.info(LOG_TAG, 'Connected successfully to mongo server')

      if (!seneca.mongoClient) {
        seneca.decorate('mongoClient', connection)
      }

      return resolve(seneca.mongoClient)
    })
  } catch (err) {
    seneca.log.fatal(LOG_TAG, err.message || err)
    return reject(err)
  }
})
