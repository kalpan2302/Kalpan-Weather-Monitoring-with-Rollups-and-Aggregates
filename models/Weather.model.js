const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    avgTemp: Number,
    maxTemp: Number,
    minTemp: Number,
    dominantCondition: String,
    timestamp: {
        type: Date,
        required: true
    }
}, { timestamps: true });

// Adding a unique index to prevent duplicate entries for the same city and timestamp
weatherSchema.index({ city: 1, timestamp: 1 }, { unique: true });

const Weather = mongoose.model('Weather', weatherSchema);
module.exports = Weather;
