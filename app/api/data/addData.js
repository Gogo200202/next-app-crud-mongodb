import {client} from "./db/mongodbDatabase"

async function addData(json) {

  try {
    const database = client.db('Test');
    const movies = database.collection('neshto');

  
   await movies.insertOne(json)
   
  } catch(e){
    console.log(e)
      }
}

export {addData}
