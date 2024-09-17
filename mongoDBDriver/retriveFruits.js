const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');

    // Query for all fruits in the collection
    const query = {}; // Empty query to match all documents

    // Retrieve all fruits
    const retrievedFruits = await fruits.find(query).toArray();

    console.log(retrievedFruits);
    retrievedFruits.forEach(fruit => {
        console.log(fruit.name);        
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);