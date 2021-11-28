import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import fs from "fs";

import indexRouter from "./routes/index.js";

var app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.get("/:page", (req, res) => {
    let pagePath = path.resolve(__dirname, "public", `${req.params.page}.html`);

    if (fs.existsSync(pagePath)) {
        res.sendFile(pagePath);
    } else {
        res.status(404).sendFile("public/pag-404.html", {root: __dirname});
    }
});
export default app;
