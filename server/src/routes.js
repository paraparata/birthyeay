import { Router } from "express";
import { getAllData, getData, addData } from "./controllers.js";
import { uploader } from "./middleware.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).json({ status: true, msg: "Success" });
});
routes.get("/data", getAllData);
routes.get("/data/:from-:to", getData);
routes.post("/data", uploader, addData);

export default routes;
