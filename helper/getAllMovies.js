import { client } from "../index.js";

export async function getAllMovies() {
  return await client.db("ag").collection("movies").find({}).toArray();
}