import { client } from "../index.js";

export async function updateMovieById(id, updateDetails) {
  return await client
    .db("ag")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateDetails });
}