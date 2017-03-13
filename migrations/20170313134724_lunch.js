
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lunch', function (table){
    table.increments('id').primary()
    table.string('food')
    table.integer('cost')
    table.string('rating')
    table.string('location')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lunch')
}
