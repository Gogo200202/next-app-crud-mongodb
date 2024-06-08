const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
let client;

async function connection() {
    client = new MongoClient(uri);

  try {
    const database = client.db('Test');
    const movies = database.collection('neshto');
       
    console.log("connected")

  }catch(e){
console.log(e)
  }
}

export {connection,client};
//run().catch(console.dir);