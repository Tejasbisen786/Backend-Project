// require('dotenv').config()

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000 , ()=>{
      console.log(` Server is Running at Port :  ${process.env.PORT}`);
    })
  })

  .catch((error) => {
    console.log("DB Connection Failed !!!!",error);
  });
























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
