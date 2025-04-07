require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'src/views')));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Test route
app.get('/test', (req, res) => {
    console.log('Test route hit!');
    res.send('Server is working!');
});

// Start server
const server = app.listen(PORT, () => {
    console.log('==========================================');
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('==========================================');
});

// Handle server errors
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
    } else {
        console.error('Server error:', error);
    }
    process.exit(1);
}); 