// const express = require("express");
import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;
// parsers
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("zubair bin ferdous this is my server");
});

export default app;
