const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const ConnectDB = require("./connection");
const { startFetchingWeatherData } = require("./controller/weatherController");
const Weather = require("./models/Weather.model");
const weatherRoutes = require('./routes/WeatherRoutes.routes');
const path = require('path');
const hbs = require('hbs');
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;


// Setting up handlebars view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Database Connection
ConnectDB();


app.use("/", weatherRoutes)


app.listen(PORT, () => {
    console.log(`Server Running on PORT : ${PORT}`);
});