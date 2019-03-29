//force pwetty colors
process.env.FORCE_COLOR = "1";

import express from "express";
// import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { routes } from "./routes";

const mongoose = require('mongoose')
const morgan = require('morgan')
const compression = require('compression')

//Handle stupid mistakes
const unhandledRejection = require("unhandled-rejection");
let rejectionEmitter = unhandledRejection({
    timeout: 15
});
rejectionEmitter.on("unhandledRejection", (error: any, promise: any) => {
  console.error("Unhandled promise rejection", promise);
});

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

//Load Express middleware
const port = 3000;
let app = express();
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//The API (real work goes here)
app.use('/api', routes);

//Start server (finally)
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
