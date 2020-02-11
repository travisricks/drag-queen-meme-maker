const faker = require("faker");
const fs = require("fs");

export function generateFakes() {
  let fakes = [];

  for (let id = 1; id <= 20; id++) {
    let queenName = faker.name.firstName();
    let quote = faker.random.words(6);
    let mood = faker.random.word();
    let queenAvatar = faker.image.avatar();
    let quoteImage = "https://source.unsplash.com/random/800x600";

    fakes.push({
      id: id,
      queenName: queenName,
      quote: quote,
      mood: mood,
      queenAvatar: queenAvatar,
      quoteImage: quoteImage
    });
  }
  return fakes;
}

// let dataObj = generateFakes();

// fs.writeFileSync("data.json", JSON.stringify(dataObj, null, "\t"));
