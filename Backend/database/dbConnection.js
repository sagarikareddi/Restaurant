import mongoose from "mongoose";
// import("dotenv").config()
// const MONGO_URL=process.env.MONGO_URL
const MONGO_URL='mongodb+srv://sagarikareddi06:Sagarika12@cluster0.e3hwsxx.mongodb.net/?retryWrites=true&w=majority';
// console.log(MONGO_URL)
export const dbConnection = () => {
  mongoose
    .connect( MONGO_URL , {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};