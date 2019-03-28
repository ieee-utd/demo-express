import express from "express";
import { model } from "../models";

export let route = express.Router();

// List all items
route.get("/", async (req: any, res: any, next: any) => {
  model.find({}, (err: any, items: any) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(items);
  });
});

// List single item
route.get('/:id', async (req: any, res: any, next: any) => {
  model.find({ _id: req.params.id }).limit(1).exec((err: any, item: any) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(item);
  });
});

// Create new item
route.post("/add", async (req: any, res: any, next: any) => {
  var postData = req.body;
  var validationError = {
    type: "Error",
    message: ""
  };

  if (!postData.title) {
    validationError.message = "title is required";
  }
  if (!postData.description) {
    validationError.message = "description is required";
  }
  if (validationError.message !== "") {
    res.json(validationError);
    return;
  }

  console.log(postData);

  model.insert(postData, (err: any, newItem: any) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(newItem);
  });
});

// Delete an item
route.delete('/:id', async (req: any, res: any, next: any) => {
  model.remove({ _id: req.params.id }, {}, (err: any, numRemoved: number) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json({ message: `Removed: ${numRemoved} item(s)` });
  });
});