// const express = require("express");
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoute } from "./app/models/student.route";
const app: Application = express();
const port = 3000;
// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", studentRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("zubair bin ferdous this is my server");
});

export default app;
