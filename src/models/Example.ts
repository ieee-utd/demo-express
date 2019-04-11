import * as mongoose from "mongoose";

var schema = new mongoose.Schema({
  //name of the example thing
  name: { type: String, required: true },
  //description of the example thing
  description: { type: String, required: false },
  //priority of the example thing
  priority: { type: Number, required: false, min: 0, max: 2, default: 0 },
  //the date the example thing was created
  dateCreated: { type: Date, required: true, default: Date.now() }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  collection: "example",
})

export var Example = mongoose.model('Example', schema)
