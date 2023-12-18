import express from "express";
import formRouter from "./routes/formRouter.js";
import authRouter from "./routes/authRouter.js";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://kaitou:AssBuster69@cluster0.nnxncee.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("upload"));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(morgan("tiny"));
  app.use("/form", formRouter);
  app.use("/auth", authRouter);

  app.get("/", (req, res) => res.send("Hello World!"));
  app.listen(5000, () => console.log("Example app listening on port 5000!"));
}

main();
