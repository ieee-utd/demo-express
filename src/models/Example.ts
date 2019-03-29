import * as mongoose from "mongoose";

var schema = new mongoose.Schema({
  //name of the example thing
  name: { type: String, required: true },
  //the date the example thing was created
  dateCreated: { type: Date, required: true }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  collection: "example",
});

export var Example = mongoose.model('Example', schema);
