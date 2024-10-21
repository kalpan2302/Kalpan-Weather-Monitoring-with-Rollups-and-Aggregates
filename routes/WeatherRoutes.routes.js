const express = require('express');
const router = express.Router();
const weatherController = require('../controller/weatherController');

// Route for rendering weather dashboard
router.get('/', weatherController.renderDashboard);

module.exports = router;
