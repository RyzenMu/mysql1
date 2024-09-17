const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');

    // Query for a movie that has the title 'Back to the Future'
    const query = [
        {name: "Apple",
         score : 8,
         review : "Great Fruit"
        },
        {name : "Orange",
         score :6,
         review : "kinda sour"
        },
        {
            name : "Banana",
            score : 7,
            review : "Great Stuff"
        }
    ];

    const fruit = await fruits.insertMany(query);

    console.log(fruit);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);