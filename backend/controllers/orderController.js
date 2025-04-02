import Order from '../models/Order.js';
import Event from '../models/Event.js';
import User from '../models/User.js';

// Create a new order
export const createOrder = async (orderData) => {
  try {
    const newOrder = new Order(orderData);
    await newOrder.save();
    
    // Populate the event and buyer details
    const populatedOrder = await Order.findById(newOrder._id)
      .populate('event', 'title')
      .populate('buyer', 'firstName lastName');
    
    return populatedOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

// Get orders by user
export const getOrdersByUser = async (userId) => {
  try {
    const orders = await Order.find({ buyer: userId })
      .populate('event', 'title')
      .populate('buyer', 'firstName lastName');
    return orders;
  } catch (error) {
    throw new Error(`Error fetching orders: ${error.message}`);
  }
};

// Get order by ID
export const getOrderById = async (orderId) => {
  try {
    const order = await Order.findById(orderId)
      .populate('event', 'title')
      .populate('buyer', 'firstName lastName');
    if (!order) throw new Error('Order not found');
    return order;
  } catch (error) {
    throw new Error(`Error fetching order: ${error.message}`);
  }
};