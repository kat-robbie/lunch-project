
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunch').del()
    .then(function () {
      // Inserts seed entries
      return knex('lunch').insert([
        {id: 1, food: 'chicken', cost: 5, rating: 'good', location: 'Dixon St'},
        {id: 2, food: 'fish burger', cost: 6, rating: 'bad', location: 'Top of Cuba'},
        {id: 3, food: 'taco', cost: 9, rating: 'average', location: 'Ghuznee St'}
      ]);
    });
};
