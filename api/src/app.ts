//force pwetty colors
process.env.FORCE_COLOR = "1";

import * as express from "express";         //create APIs really easily
import * as mongoose from "mongoose";       //model the world you use
import * as morgan from "morgan";           //log requests
import * as compression from "compression"; //basic API compression
import * as bodyParser from "body-parser";  //parse data coming in to the server
import * as cors from "cors";

//Handle stupid mistakes
const unhandledRejection = require("unhandled-rejection");
let rejectionEmitter = unhandledRejection({
    timeout: 15
})
rejectionEmitter.on("unhandledRejection", (error: any, promise: any) => {
  console.error("Unhandled promise rejection", promise)
})

//Prepare connection details
const DATABASE_URI = "mongodb://localhost:27017/whoosh-db"

//Connect to database
export const db = mongoose.connection;
mongoose.connect(DATABASE_URI, { config: { autoIndex: true }, useNewUrlParser: true })
.then(async () => {
  //perform one-time database init here
})
.catch((err: any) => {
  console.error(err)
  process.exit(1)
})

//Load Express middleware
const port = 3000; //listen to localhost:PORT_NUMBER_HERE

let app = express(); //load express
app.use(morgan('dev')); //log every request you hit
app.use(compression()); //enable packet compression, making requests faster
app.use(bodyParser.json()); //allow parsing JSON

//enable CORS support
var corsOptions = {
  origin: /^http:\/\/localhost:.*$/,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};
app.use(cors(corsOptions));

//The API (real work goes here)
import { routes } from "./routes";
app.use('/api', routes)

//Start server (finally)
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
