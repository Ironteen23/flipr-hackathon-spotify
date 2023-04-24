import express from "express";
// import express from "express";
import { getAllData, addFav } from "../controllers/data.js";

const PodcastRoutes = express.Router();
PodcastRoutes.get("/", getAllData);
PodcastRoutes.post("/addFav", addFav);
// authRoutes.post("/login", login);

export default PodcastRoutes;
