import { Webhook } from 'svix';
import { createOrUpdateUser, deleteUser } from '../controllers/userController.js';

export const handleClerkWebhook = async (req, res) => {
  try {
    const payload = req.body;
    const svixHeaders = req.headers;
    
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(payload, svixHeaders);
    
    const { id, ...attributes } = evt.data;
    const eventType = evt.type;

    if (eventType === 'user.created' || eventType === 'user.updated') {
      await createOrUpdateUser({ id, ...attributes });
    } else if (eventType === 'user.deleted') {
      await deleteUser(id);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};