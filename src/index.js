// require('dotenv').config()

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
  path: "./env",
});

connectDB()



























/*
import express from "express";
const app = express()(
  // ()() effi ( best Practise)
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw err;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is Listening on PORT  ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("Error", error);
      throw err;
    }
  }
)();
*/
