const { MongoClient } = require('mongodb');

const cfg = require('./dbConfig.json');
const url = `mongodb+srv://${cfg.username}:${cfg.password}@${cfg.hostname}`;

const client = new MongoClient(url);
const db = client.db('startup');

client
 .connect()
 .then(() => db.command({ ping: 1 }))
 .then(() => console.log(`Connected`))
 .catch((ex) => {
   console.log(`Error with ${url} because ${ex.message}`);
   process.exit(1);
 });

 const scoreCollection = db.collection('score');

//scoreCollection.insertOne({ name: 'tim', score: 42 });
//scoreCollection.insertOne({ name: 'sue', score: 142, rank: 'expert' });

/*scores = [
 { name: 'ryan', score: 3 },
 { name: 'holowaychuk', score: 83 },
];
scoreCollection.insertMany(scores);*/

async function query() {
const query = { score: { $gt: 10 } };
const options = {
  sort: { score: -1 },
  limit: 10,
};

const cursor = scoreCollection.find(query, options);
const result = await cursor.toArray();
result.forEach((i) => console.log(i.name));
}

query();
