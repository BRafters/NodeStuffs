// Created packages
const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/weather.js");

// npm and stock packages
const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views/");
const partialsPath = path.join(__dirname, "../templates/partials/");

// Setup static directory to serve
app.use(express.static(publicPath));

// Setup handlebars location and views location
app.set("views", viewsPath); // Can also do --> path.join(__dirname, "../templates/views/");
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index',{
        title: "Weather App",
        name: "Brennan Rafters"
    });
});

app.get("/about", (req, res) => {
    res.render('about', {
        title: "The about page",
        name: "Brennan"
    });
});

app.get("/weather", (req, res) => {
    if(!req.query.address){
        return res.send({error: "Please provide an address"});
    }
    geoCode(req.query.address, (err, {text} = {}) => {
        if(err){
            return res.send({error: "An error has occurred"});
        }
        else{
            forecast(text, (err, weatherdata) => {
                if(err){
                    console.log("error on forecast");
                    return res.send({error: err})
                }
                else{
                    res.send({
                        forecast: weatherdata.current.weather_descriptions[0],
                        temperature: weatherdata.current.temperature + "°C",
                        location: weatherdata.location.name + ", " + weatherdata.location.region,
                        address: req.query.address
                    });
                }
            });
        }
    });
});

app.get("/products", (req, res) => {
    if(!req.query.search){
        return res.send({error: "You must provide a search term"});
    }

    res.send({product: ["Battlefield 4", "Call of Duty: Modern Warfare"]});
});

app.get("/help", (req, res) => {
    res.render('help', {
        title: "This is the help page",
        content: "This page is here to help you when you need it"
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "Help article not found",
        errMsg: "Could not find the help article you were looking for"
    });
});

app.get("*", (req, res) => {
    res.render('404', {
        title: "Page Not Found",
        errMsg: "The page you were looking for was not found."
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});