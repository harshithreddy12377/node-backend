import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

import dotenv from "dotenv";
dotenv.config();

import orderRoute from "./routes/orderRoute.js"

const app = express();
app.use(express.json());
app.use(cors());
const dbUser=encodeURIComponent(process.env.DB_USER);
const dbPass=encodeURIComponent(process.env.DB_PASS);

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.blpgaix.mongodb.net/grietdb?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/user", userRoute);

app.use("/api/product", productRoute);

app.use("/api/product", productRoute);
app.use("/api/order",orderRoute)

