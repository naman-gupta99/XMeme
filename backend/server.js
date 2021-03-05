import bodyParser from "body-parser";
import chalk from "chalk";
import cors from "cors";
import express from "express";
import path from "path";
import mongoose from "mongoose";

import posts from "./routes/apis/posts";
import config from "./config";

const app = express();
const mongoURI = config.MONGO_URI;
const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, "frontend")));

//  Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the DB
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected."))
    .catch((err) => {
        console.error(chalk.red("Database Connection Error : " + err));
    });

// Use Routers
app.use("/memes", posts);

// Serve Frontend
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/index.html"));
});

app.listen(port, () => {
    console.log("Running on port " + port);
});
