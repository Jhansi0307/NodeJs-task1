
import { client } from "../index.js";

export async function deleteAllmovies() {
    return await client.db("ag").collection("movies").deleteMany({});
}
