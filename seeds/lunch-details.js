
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lunch').del()
    .then(function () {
      // Inserts seed entries
      return knex('lunch').insert([
        {id: 1, food: 'Vege Mee Goreng (fried noodles)', cost: 9, rating: 'delicious', location: 'Satay Kingdom, Cuba St Left Bank '},
        {id: 2, food: 'Fish Burger', cost: 6, rating: 'excellent value for money', location: 'Wellington Seamarket, Cuba St'},
        {id: 3, food: 'Pork Bun', cost: 3, rating: 'average quality of bun', location: 'Rams Crazy Dumpling Restaurant, Cuba St'}
      ]);
    });
};
