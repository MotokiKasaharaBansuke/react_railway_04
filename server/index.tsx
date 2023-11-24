import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";

const app = express();
const PORT = 9000;

app.use(express.static(path.resolve(__dirname, "../..", "build")));

app.get("/*", (req: Request, res: Response) => {
  const reactApp = renderToString(<App />);

  const indexFile = path.resolve(__dirname, "../..", "build", "index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Internal Server Error");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
