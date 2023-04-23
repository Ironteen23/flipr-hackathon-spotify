import express from "express";
// import express from "express";
import { getAllData } from "../controllers/data.js";

const PodcastRoutes = express.Router();
PodcastRoutes.get("/", getAllData);
// authRoutes.post("/login", login);

export default PodcastRoutes;
