import * as express from "express";
import { Example } from "../models";

export let route = express.Router()

// List all items
route.get("/", async (req: any, res: any, next: any) => {
  try {
    let items = await Example.find({ })
    res.send(items)
  } catch (e) { next(e) }
})

// Get a single item
route.get("/:id", async (req: any, res: any, next: any) => {
  try {
    let _myTask = await Example.findOne({ _id: req.params.id })
    res.send({
      message: _myTask
    })
  } catch (e) { next(e) }
})

// Create an item
route.post("/", async (req: any, res: any, next: any) => {
  try {
    let myTask = req.body
    const _myTask = new Example(myTask)
    await _myTask.save()
    res.send({
      message: "successfully did stuff! :)"
    })
  } catch (e) { next(e) }
})

// Update an item
route.put("/:id", async (req: any, res: any, next: any) => {
  try {
    let myTask = req.body
    let newTask: any = {}
    if (myTask.name) newTask['name'] = myTask.name
    if (myTask.description) newTask['description'] = myTask.description
    if (myTask.priority) newTask['priority'] = myTask.priority
    let _myTask = await Example.findOneAndUpdate({ _id: req.params.id }, newTask)
    res.send({
      message: _myTask
    })
  } catch (e) { next(e) }
})

// Delete all items
route.delete("/all", async (req: any, res: any, next: any) => {
  try {
    let _myTask = await Example.remove({ })
    res.send({
      message: _myTask
    })
  } catch (e) { next(e) }
})

// Delete an item
route.delete("/:id", async (req: any, res: any, next: any) => {
  try {
    let _myTask = await Example.findOneAndDelete({ _id: req.params.id })
    res.send({
      message: _myTask
    })
  } catch (e) { next(e) }
})