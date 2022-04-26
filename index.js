const { response } = require("express");
const express = require("express");
const { readFile } = require("fs").promises;

const app = express();

app.get("/", async (request, response) => {
  readFile("./home.html", "utf-8", (err, html) => {
    if (err) {
      response.status(500).send("sorry, out of order");
    }

    response.send(html);
  });
});

console.log("RAN HERE");
app.listen(process.env.PORT || 8080, () =>
  console.log(`App running on localhost:8080`)
);
