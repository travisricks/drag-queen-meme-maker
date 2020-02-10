exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE memes(
      id SERIAL PRIMARY KEY NOT NULL,
      queen TEXT,
      quote TEXT,
      img TEXT,
      emotion TEXT,
      created_at TIMESTAMP
  )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
    let dropQuery = `DROP TABLE memes`
    return knex.raw(dropQuery)
};
