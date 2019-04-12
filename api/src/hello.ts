import * as express from "express";

const app =  express(); 

app.get("/", (req: any, res: any) => {
  res.send("Hello world from typescript!");
});

app.listen(8081, () => {
  console.log("typescript server running on port 8081");
})