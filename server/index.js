import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import PodcastRoutes from "./routes/data.js";
import dotenv from "dotenv";
import { Client } from "podcast-api";
import Podcast from "./models/Podcast.js";
// import adminRoutes from "./routes/admin.js"
const app = express();
dotenv.config();

// const fs = require("fs");
// const readline = require("readline");
// import { google } from "googleapis";

const PORT = process.env.PORT || 6001;
const Mongo = process.env.MONGO_URL;

app.use(cors())
app.use(express.json())

/* ROUTES */

// app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use("/auth", authRoutes);
// app.use("/admin", adminRoutes);
app.use("/data", PodcastRoutes);

mongoose
  .connect(Mongo, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))

// import Client from 'podcast-api'

// If apiKey is null, then we will connect to a mock server
// that returns fake data for testing purposes.
// let data
// const client = Client({ apiKey: 'aef3b6228c6d4cf0b46cda85cb0a09c1' })
// // client
// //   .fetchBestPodcasts({
// //     genre_id: '93',
// //     page: 2,
// //     region: 'us',
// //     sort: 'listen_score',
// //     safe_mode: 0,
// //   })
// //  .then((response) => {
// //    data=response.data
// //     // Get response json data here
// //   const s = {

// //     }
// //   })
// //   .catch((error) => {
// //     console.log(error)
// //   })
// client
//   .search({
//     q: 'army',
//     sort_by_date: 0,
//     type: 'episode',
//     offset: 0,
//     len_min: 10,
//     len_max: 30,
//     genre_ids: '68,82',
//     published_before: 1580172454000,
//     published_after: 0,
//     only_in: 'title,description',
//     language: 'English',
//     safe_mode: 0,
//     unique_podcasts: 0,
//     page_size: 10,
//   })
//   .then(async (response) => {
//     // Get response json data here
//     let data = response.data.results
//     // console.log('data....', data.results[0].audio)
//     console.log(data[0])

//     for (let i = 0; i < 15; i++) {
//       // const r = Podcast.findOne({ imageLink: data[i].image })

//       // if (!r) {
//       const s = new Podcast({
//         Name: data[i].title_original,
//         audioLink: data[i].audio,
//         imageLink: data[i].image,
//         length: data[i].audio_length_sec,
//         description: data[i].description_original,
//         isVideo: false,
//       })
//       console.log('s...', s)
//       const savedpod = await s.save()
//       // }
//       // console.log('hem', r)
//     }
//   })
//   .catch((error) => {
//     console.log(error)
//   })
