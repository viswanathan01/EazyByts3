import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectToDatabase } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { handleClerkWebhook } from './utils/webhook.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Database connection
connectToDatabase();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

// Clerk webhook endpoint
app.post('/api/webhooks/clerk', express.raw({ type: 'application/json' }), handleClerkWebhook);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Event Management API!" });
  });

  
// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

export default app;