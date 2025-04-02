import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await getAllEvents(req.query);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Protected routes (require authentication)
router.use(authMiddleware);

// Create event
router.post('/', async (req, res) => {
  try {
    const event = await createEvent(req.body, req.userId);
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update event
router.put('/:id', async (req, res) => {
  try {
    const event = await updateEvent(req.params.id, req.body, req.userId);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete event
router.delete('/:id', async (req, res) => {
  try {
    const event = await deleteEvent(req.params.id, req.userId);
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;