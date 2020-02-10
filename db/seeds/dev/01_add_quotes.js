/*
id SERIAL PRIMARY KEY NOT NULL,
      queen TEXT,
      quote TEXT,
      img TEXT,
      emotion TEXT,
      created_at TIMESTAMP
*/
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('memes').del()
    .then(function () {
      // Inserts seed entries
      return knex('memes').insert([
        {queen: 'RuPaul', quote: 'She already done had hers', img: '/images/test.jpg', emotion: 'happy'},
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
