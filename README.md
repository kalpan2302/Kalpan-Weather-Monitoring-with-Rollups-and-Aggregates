
# Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

Develop a real-time data processing system to monitor weather conditions and provide summarized insights using rollups and aggregates. The system will utilize data from the OpenWeatherMap API (https://openweathermap.org/).

## Web Site link (Render)

- Deployed  [Web Site](https://greatweathermonitering.onrender.com)




## Technologies
- **Node.js**
- **Express.js** (RESTful API)
- **Javascript**
- **hbs**(handlebars)
- **HTML/CSS**
- **MongoDB**
- **Postman** (API Testing)

## NOTE:

--Here I set the Threshold Temperature 28 C.
-- To run this on a local machine you need to change Database url in ‘/connection.js’ file to 
‘mongodb://127.0.0.1:27017/Weather’ local url.

### Setup Instructions

### 1. Prerequisites
Before setting up the project, ensure you have the following installed:

- **Node.js (v14.x or above)
- **npm (v6.x or above)
- **Git

### 2. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/kalpan2302/Kalpan-Weather-Monitoring-with-Rollups-and-Aggregates
```

Navigate to the root directory:
```bash
cd Kalpan-Weather-Monitoring-with-Rollups-and-Aggregates
```
Install the required packages:
```bash
npm install
```

Start the  server:
```bash
node app.js
```
or
```bash
nodemon app.js
```

This will start the app on http://localhost:3000

### Additional Information:

-- To run this on a local machine you need to change Database url in ‘/connection.js’ file to 
‘mongodb://127.0.0.1:27017/Weather’ local url.

-- On render web site link if the server is not responding quickly it may be due to free tier resource use to host this static site. So please wait for 40-50 sec and then press the evaluate button again. It will surely run.

