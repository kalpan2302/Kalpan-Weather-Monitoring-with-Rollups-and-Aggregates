// Fetch data passed from backend (cityLabels, avgTemps)
const cityLabels = JSON.parse(document.getElementById('cityLabels').value);
const avgTemps = JSON.parse(document.getElementById('avgTemps').value);

// Create the temperature chart using Chart.js
const ctx = document.getElementById('tempChart').getContext('2d');

const tempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: cityLabels,
        datasets: [{
            label: 'Average Temperature (°C)',
            data: avgTemps,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Cities'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false
            }
        }
    }
});
