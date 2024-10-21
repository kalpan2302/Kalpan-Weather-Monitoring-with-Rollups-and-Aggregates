const axios = require('axios');
const Weather = require('../models/Weather.model');

const CONDITION_THRESHOLD = 'Rain';
const TEMP_THRESHOLD = 28; // Example: 35°C

const fetchData = async () => {
    const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad','Surat','Pune','Ahmedabad','Jaipur'];
    const alerts = []; // Store alert messages

    for (const city of cities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
            const data = response.data;

            const cityWeather = {
                city: data.name,
                avgTemp: data.main.temp,
                maxTemp: data.main.temp_max,
                minTemp: data.main.temp_min,
                dominantCondition: data.weather[0].main,
                timestamp: new Date() // Ensure timestamp is set and valid
            };

            // Check for temperature threshold breach and store alert message
            if (data.main.temp >= TEMP_THRESHOLD) {
                const alertMessage = `Alert: Temperature in ${data.name} is above ${TEMP_THRESHOLD}°C. Current Temp: ${data.main.temp}°C.`;
                alerts.push(alertMessage);
            }

            // Use upsert to update existing or insert new document
            await Weather.updateOne(
                { city: cityWeather.city },  // Match the city
                { $set: cityWeather },       // Update with new data
                { upsert: true }             // Insert if no match found
            );

        } catch (error) {
            console.log(`Error fetching weather data for ${city}: ${error}`);
        }
    }
    console.log(alerts);
    return alerts; // Return the alerts to be passed to the frontend
};


const renderDashboard = async (req, res) => {
    // Fetch the latest weather data and alerts
    const alerts = await fetchData();

    // Fetch the most recent weather summaries for display
    const weatherSummaries = await Weather.find({}).sort({ timestamp: -1 });

    const cityLabels = weatherSummaries.map(summary => summary.city);
    const avgTemps = weatherSummaries.map(summary => summary.avgTemp);

    // Render the weather dashboard, passing in the weather data and alerts
    res.render('weather', {
        weatherSummaries,
        cityLabels: JSON.stringify(cityLabels),
        avgTemps: JSON.stringify(avgTemps),
        alerts: alerts
    });
};

// Run the fetch function every 5 minutes
setInterval(fetchData, 5 * 60 * 1000);

module.exports = { fetchData, renderDashboard };
