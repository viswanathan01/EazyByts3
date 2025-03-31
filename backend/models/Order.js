const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  totalAmount: { type: String, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Order", OrderSchema);
