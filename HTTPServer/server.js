const express = require("express");
const bodyParser = require('body-parser')
const fs = require("fs");
const app = express();

app.use(express.json()); // Add this line to parse incoming JSON data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/beacon_list", (req, res) => {
  const beaconData = req.body;
  console.log("Received beacon data:", beaconData);

  fs.appendFile("beacon_list.txt", JSON.stringify(beaconData) + "\n", (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log("Beacon data saved to file");
      res.sendStatus(200);
    }
  });
});

app.get("/beacon_list", (req, res) => {
  fs.readFile("beacon_list.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const beaconList = data.split("\n").filter((line) => line !== "");
      res.json(beaconList);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});