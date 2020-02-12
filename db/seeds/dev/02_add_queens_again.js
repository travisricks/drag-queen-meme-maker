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
          queen: "RuPaul",
          quote: "Everybody say love",
          img: "img/02-rupaul-love.gif",
          emotion: "happy"
        },
        {
          queen: "Manilla Luzon",
          quote: "this is Manilla's quote",
          img: "img/01-manilla-crazy.gif",
          emotion: "crazy"
        },
        {
          queen: "Detox",
          quote: "I've had it, officially",
          img: "img/03-detox-mad.gif",
          emotion: "mad"
        },
        {
          queen: "LaGanja Estranga",
          quote: "",
          img: "img/04-laganja-crazy.gif",
          emotion: "crazy"
        },
        {
          queen: "Trixie Mattel",
          quote: "Oh honey",
          img: "img/05-trixie.gif",
          emotion: "judgy"
        },
        {
          queen: "Katya",
          quote: "It's me",
          img: "img/06-katya.gif",
          emotion: "happy"
        },
        {
          queen: "Bianca DelRio",
          quote: "OK, Queen",
          img: "img/07-bianca.gif",
          emotion: "shade"
        },
        {
          queen: "Latrice Royale",
          quote: "Shade!",
          img: "img/08-latrice.gif",
          emotion: "shade"
        }
      ]);
    });
};
