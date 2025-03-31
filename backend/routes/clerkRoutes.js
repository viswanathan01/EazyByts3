const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Middleware to verify Clerk webhook signature (Optional, but recommended)
router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { type, data } = req.body;

    if (!type || !data) {
      return res.status(400).json({ error: "Invalid webhook payload" });
    }

    switch (type) {
      case "user.created":
        await User.create({
          _id: data.id, // Store Clerk user ID
          email: data.email_addresses[0].email_address,
          username: data.username || data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        });
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, {
          email: data.email_addresses[0].email_address,
          username: data.username,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        });
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        console.log("Unhandled webhook event:", type);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Webhook Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
