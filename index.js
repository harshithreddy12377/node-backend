import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/grietdb")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/user", userRoute);
