import express from "express";
import { createMovies } from "../helper/createMovies.js";
import { deleteByMovieId } from "../helper/deleteByMovieId.js";
import { getAllMovies } from "../helper/getAllMovies.js";
import { updateMovieById } from "../helper/updateMovieById.js";
import {getMovieById} from "../helper/getMoviesById.js"
import { deleteAllmovies } from "../helper/deleteAllmovies.js";
const router = express.Router();
// Cursor -> pagination
router.get("/", async function (request, response) {
  // db.movies.find({})
  const movies = await getAllMovies();
  response.send(movies);
});

router.post("/", async function (request, response) {
  const newMovies = request.body;
  // console.log(newMovies);
  // db.movies.insertMany(data)

  const result = await createMovies(newMovies);
  response.send(result);
});

router.delete("/", async function (request, response) {
    // db.movies.find({})
    const movies = await deleteAllmovies();
    response.send(movies);
  });
  

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  const movie = await getMovieById(id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "No such movie" });
  
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  // db.movies.deleteOne({id: "102"})
  const result = await deleteByMovieId(id);

  response.send(result);
});

router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const updateDetails = request.body;
  // db.movies.updateOne({id: "102"}, { $set: updateDetails})

  const result = await updateMovieById(id, updateDetails);

  response.send(result);
});

export const moviesRouter = router;


