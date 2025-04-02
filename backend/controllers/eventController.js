import Event from '../models/Event.js';
import User from '../models/User.js';

// Create a new event
export const createEvent = async (eventData, userId) => {
  try {
    const organizer = await User.findById(userId);
    if (!organizer) throw new Error('Organizer not found');

    const newEvent = new Event({
      ...eventData,
      organizer: userId,
    });

    await newEvent.save();
    return newEvent;
  } catch (error) {
    throw new Error(`Error creating event: ${error.message}`);
  }
};

// Get all events
export const getAllEvents = async (query = {}) => {
  try {
    const events = await Event.find(query)
      .populate('category', 'name')
      .populate('organizer', 'firstName lastName');
    return events;
  } catch (error) {
    throw new Error(`Error fetching events: ${error.message}`);
  }
};

// Get event by ID
export const getEventById = async (eventId) => {
  try {
    const event = await Event.findById(eventId)
      .populate('category', 'name')
      .populate('organizer', 'firstName lastName');
    if (!event) throw new Error('Event not found');
    return event;
  } catch (error) {
    throw new Error(`Error fetching event: ${error.message}`);
  }
};

// Update event
export const updateEvent = async (eventId, updateData, userId) => {
  try {
    const event = await Event.findOne({ _id: eventId, organizer: userId });
    if (!event) throw new Error('Event not found or unauthorized');

    Object.assign(event, updateData);
    await event.save();
    return event;
  } catch (error) {
    throw new Error(`Error updating event: ${error.message}`);
  }
};

// Delete event
export const deleteEvent = async (eventId, userId) => {
  try {
    const event = await Event.findOneAndDelete({ _id: eventId, organizer: userId });
    if (!event) throw new Error('Event not found or unauthorized');
    return event;
  } catch (error) {
    throw new Error(`Error deleting event: ${error.message}`);
  }
};