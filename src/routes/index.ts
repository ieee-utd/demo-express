import express from "express";
import { route as whooshRoute } from "./whoosh";

export const routes = express.Router();

routes.get('/', async (req: any, res: any) => {
  res.send("Welcome to our API!");
});

routes.use("/whoosh", whooshRoute);