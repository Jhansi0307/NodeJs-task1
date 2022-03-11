import { client } from "../index.js";

export async function getMovieById(id) {
  return await client.db("ag").collection("movies").findOne({ id: id });
}