/*
- a get function that returns all data from the db table
- a post function that will add a row to the table
- a put function that will update a row with a given id
- a delete function that will delete a row with a given id
*/

/*
id SERIAL PRIMARY KEY NOT NULL,
      queen TEXT,
      quote TEXT,
      img TEXT,
      emotion TEXT,
      created_at TIMESTAMP
*/

const getTableData = (req, res, db) => {
  db.select("*")
    .from("memes")
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const postTableData = (req, res, db) => {
  const { queen, quote, img, emotion } = req.body;
  const created_at = new Date();
  db("memes")
    .insert({ queen, quote, img, emotion, created_at })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const putTableData = (req, res, db) => {
  const { id, queen, quote, img, emotion } = req.body;
  db("memes")
    .where({ id })
    .update({ queen, quote, img, emotion })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db("memes")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData
};
