import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
// origin: [process.env.FRONTEND_URL],
dotenv.config({ path: "./config.env" });
let FRONTEND_URL = "https://celebrated-beignet-af47a8.netlify.app/"
app.use(
  cors({
    origin:"https://celebrated-beignet-af47a8.netlify.app/",
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})
dbConnection();
app.use(errorMiddleware);
export default app;
