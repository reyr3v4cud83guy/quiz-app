import express from 'express';
import bodyParser from 'body-parser';
import { setRoutes } from './routes/quizRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

console.log('Starting server...');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src/views'));

// Test endpoint
app.get('/test', (req, res) => {
    console.log('Test endpoint hit');
    res.send('Server is working!');
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Routes
console.log('Setting up routes...');
setRoutes(app);

// Start server
console.log(`Attempting to start server on port ${PORT}...`);
app.listen(PORT, () => {
    console.log('==========================================');
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('==========================================');
}).on('error', (err: any) => {
    console.error('❌ Server error:', err);
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
    }
});