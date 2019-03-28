import express from "express";
import * as bodyParser from "body-parser";
import { routes } from "./routes";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", (req:any, res:any) => {
    res.send("Hello, world!");
});

app.use('/api', routes);

app.listen( port, () => {
    console.log(`Server started at http://localhost:${port}`);
});