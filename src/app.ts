import express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { routes } from "./routes";

//Prepare connection details
const DATABASE_URI = "mongodb://localhost:27017/whoosh-db";

//Connect to database
export const db = mongoose.connection;
mongoose.connect(DATABASE_URI, { config: { autoIndex: true }, useNewUrlParser: true })
.then(async () => {
  //perform one-time database init here
})
.catch((err: any) => {
  console.error(err);
  process.exit(1);
});

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.get("/", (req:any, res:any) => {
    res.send("Hello, world!");
});

app.use('/api', routes);

app.listen( port, () => {
    console.log(`Server started at http://localhost:${port}`);
});