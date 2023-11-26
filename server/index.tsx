import express, { Request, Response } from "express";
import { ServerStyleSheet } from "styled-components";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import path from "path";

const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req: Request, res: Response) => {
  const sheet = new ServerStyleSheet();

  try {
    const reactApp = renderToString(sheet.collectStyles(<App />));
    const styleTags = sheet.getStyleTags();

    const resHtml = `<!DOCTYPE html>
    <html>
      <head>
        ${styleTags}
      </head>
      <body>
        <div id="root">${reactApp}</div>
      </body>
    </html>`;

    res.send(resHtml);
  } catch {
    return res.status(500).send("Internal Server Error");
  } finally {
    sheet.seal();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
