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
  return knex("memes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("memes").insert([
        {
          queen: "Manilla Luzon",
          quote: "",
          img: "/img/01-manilla-crazy.gif",
          emotion: "crazy"
        },
        {
          queen: "RuPaul",
          quote: 'Everybody say "love"',
          img: "/img/02-rupaul-love.gif",
          emotion: "love"
        },
        {
          queen: "Detox",
          quote: "I've had it, officially",
          img: "/img/02-rupaul-love.gif",
          emotion: "mad"
        },
      ]);
    });
};
