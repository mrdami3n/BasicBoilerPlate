import express from 'express';
import path from 'path';
import exampleRoutes from './routes/exampleRoutes';

const app = express();

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/example', exampleRoutes);

export default app;
