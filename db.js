var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  showLunch: showLunch
}

function showLunch (testDb) {
  var db = testDb || connection
  return db('lunch').select()
}
