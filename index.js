// const express = require("express");//  "type": "commonjs",
import dotenv from "dotenv";
import express from "express"; // "type": "module",
import { MongoClient } from "mongodb";
import {moviesRouter} from "./router/movies.js"
import cors from "cors";

dotenv.config();

const app = express();
//console.log(process.env.MONGO_URL);
app.use(cors())
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://localhost";

const MONGO_URL = process.env.MONGO_URL;
// middleware - apply function -> Intercept all req & parse (body) JSON
app.use(express.json());

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return client;
}

export const client = await createConnection();

// req - request, res - response
app.get("/", function (request, response) {
  response.send("Hello 🌏✨✨🧡🧡");
});
app.use("/movies",moviesRouter)

app.listen(PORT, () => console.log(`Server is started in ${PORT}`));

// Select -> Refactor -> Extract to module scope
// Select -> Refactor -> move to new file