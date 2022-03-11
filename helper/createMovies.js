import { client } from "../index.js";

export async function createMovies(newMovies) {
  return await client.db("ag").collection("movies").insertMany(newMovies);
}