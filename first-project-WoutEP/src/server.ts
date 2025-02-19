import app from "./app";
import config from "./app/config";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`this is the server ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
main();
