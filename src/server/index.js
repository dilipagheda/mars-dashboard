require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");
const cors = require("cors");
const moment = require("moment");
const transformPhotos = require("./utils");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve("../../dist")));

app.get("/apod", async (req, res) => {
  const now = moment(new Date());

  const dateParam = `${now.year()}-${now.month() + 1}-${now.date()}`;
  const yesterdayParam = `${now.year()}-${now.month() + 1}-${now.date() - 1}`;

  try {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${dateParam}`
    );
    console.log(`1 - ${response.status}`);
    if (response.status === 200) {
      let image = await response.json();
      res.send({ image });
    } else {
      let response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${yesterdayParam}`
      );
      console.log(`2 - ${response.status}`);
      if (response.status === 200) {
        let image = await response.json();
        res.send({ image });
      } else {
        const errorResponse = await response.json();
        console.log(errorResponse);
        res.status(400).json(errorResponse);
      }
    }
  } catch (err) {
    res.status(500).json({ message: "sorry! something went wrong" });
  }
});

app.get("/photos", async (req, res) => {
  try {
    const roverName = req.query.rover;
    if (!roverName) {
      return res.status(400).json({
        error: "rover name is not provided",
      });
    }
    const manifestsResponse = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=${process.env.API_KEY}`
    ).then((res) => res.json());

    const max_sol = manifestsResponse.photo_manifest.max_sol;

    const photosResponse = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${max_sol}&api_key=${process.env.API_KEY}`
    ).then((res) => res.json());

    const resp = {
      photos: transformPhotos(photosResponse.photos),
      manifest: {
        name: manifestsResponse.photo_manifest.name,
        landing_date: manifestsResponse.photo_manifest.landing_date,
        launch_date: manifestsResponse.photo_manifest.launch_date,
        status: manifestsResponse.photo_manifest.status,
        max_sol: manifestsResponse.photo_manifest.max_sol,
        max_date: manifestsResponse.photo_manifest.max_date,
      },
    };
    res.status(200).json(resp);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(port, () =>
  console.log(`Mars Dashboard App is listening on port ${port}!`)
);
