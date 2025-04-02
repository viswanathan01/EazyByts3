import express from 'express';
import { createOrder, getOrdersByUser, getOrderById } from '../controllers/orderController';
import authMiddleware from '../middlewares/auth';

const router = express.Router();

// Protected routes (require authentication)
router.use(authMiddleware);

// Create order
router.post('/', async (req, res) => {
  try {
    const order = await createOrder({
      ...req.body,
      buyer: req.userId,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user's orders
router.get('/', async (req, res) => {
  try {
    const orders = await getOrdersByUser(req.userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await getOrderById(req.params.id);
    // Verify the order belongs to the user
    if (order.buyer._id.toString() !== req.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;