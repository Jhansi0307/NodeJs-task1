import { client } from "../index.js";

export async function deleteByMovieId(id) {
  return await client.db("ag").collection("movies").deleteOne({ id: id });
}