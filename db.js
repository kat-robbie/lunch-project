var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  saveForm: saveForm,
  getLunch: getLunch,
  getIndividual: getIndividual
}

function saveForm (lunch_details, testDb) {
  var db = testDb || connection
  return db ('lunch').insert(lunch_details)
}


function getLunch (testDb) {
  var db = testDb || connection
  return db('lunch').select()
}

function getIndividual (id, testDb) {
  var db = testDb || connection
  return db('lunch').where('id', id)
}
