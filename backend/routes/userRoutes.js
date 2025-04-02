import express from 'express';
import { createOrUpdateUser, deleteUser, getUserById } from '../controllers/userController';

const router = express.Router();

// Webhook routes for Clerk
router.post('/webhook/user', async (req, res) => {
  try {
    const { type, data } = req.body;
    
    if (type === 'user.created' || type === 'user.updated') {
      const user = await createOrUpdateUser(data);
      return res.status(200).json(user);
    }
    
    if (type === 'user.deleted') {
      const user = await deleteUser(data.id);
      return res.status(200).json(user);
    }
    
    res.status(200).json({ message: 'Webhook received but no action taken' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;