const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const Solar = require("./Model/solarSystem");
const Planets = require("./Model/planets");
const bodyParser = require("body-parser");
app.set('view engine', 'ejs'); //Specifying to use the EJS image engine
app.set('views', __dirname + '/View');//Define the View folder
const path = require("path");//Define the path
app.use(express.static("img"));//Define the img folder
app.use(express.static("assets"));//Define the assets
app.use(express.urlencoded({ extended: true }));




//Overview

app.get("/", (req, res) => {
  Solar.find().then((result) => {
    // res.send(result);
    res.render("home", { result });
  }).catch((err) => {
    console.log(err);
  })
});


//Planets list
app.get("/planets", (req, res) => {
  Planets.find().then((planets) => {

    res.render("planets", { planets });
  }).catch((err) => {

    console.log(err);
  })
})


//Planet details page
app.get("/planets/:ad", (req, res) => {

  const ad = req.params.ad;
  Planets.find({ ad }).then((planet) => {

    res.render("planetsDetail", { planet });
  }).catch((err) => {

    console.log(err);
  })


})


//Planet information 

app.get("/api/planets/:ad", (req, res) => {

  //Word first letter enlargement
  function capitalizeFirstLetter(str) {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
  }

  const ad = req.params.ad;

  const newAd = capitalizeFirstLetter(ad);
  Planets.find({ ad: newAd }).then((planet) => {


    if (planet != null && planet != "") {
      res.json(planet);

    }
    else {


      res.status(404).json({ error: "Veri bulunamadı" });
    }
  }).catch((err) => {

    console.log(err);
  })

})










app.listen(PORT, () => {
  console.log("Bağlantı sağlandı 3000");
});
