import {client} from "./db/mongodbDatabase"

async function getAllData() {

  try {
    const database = client.db('Test');
    const movies = database.collection('neshto');

    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const result = await movies.find(query).toArray();

    //console.log(movie);
    return result; 
  } catch(e){
    console.log(e)
      }
}

export {getAllData}
