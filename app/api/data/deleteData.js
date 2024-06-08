import {client} from "./db/mongodbDatabase"

async function deleteData(name) {

  try {
    const database = client.db('Test');
    const movies = database.collection('neshto');

    // Query for a movie that has the title 'Back to the Future'
    const query = { "username":name };
   await movies.deleteOne(query)

    //console.log(movie)
  } catch(e){
    console.log(e)
      }
}

export {deleteData}
