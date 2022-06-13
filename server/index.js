import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dataRoutes from "./src/routes.js";

const PORT = 4002;

const app = express();
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use("/img", express.static("img"));
app.use(express.json());
app.use(dataRoutes);

const uri = `mongodb://mongoby:mongoby@localhost:27017/mongoby`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected"));
app.listen(PORT, () => console.log("Server Running at port: " + PORT));
