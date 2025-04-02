import User from '../models/User';

// Create or update user from Clerk webhook
export const createOrUpdateUser = async (clerkUser) => {
  try {
    const user = await User.findOneAndUpdate(
      { clerkId: clerkUser.id },
      {
        clerkId: clerkUser.id,
        email: clerkUser.email_addresses[0].email_address,
        username: clerkUser.username,
        firstName: clerkUser.first_name,
        lastName: clerkUser.last_name,
        photo: clerkUser.image_url,
      },
      { upsert: true, new: true }
    );

    return user;
  } catch (error) {
    throw new Error(`Error creating/updating user: ${error.message}`);
  }
};

// Delete user from Clerk webhook
export const deleteUser = async (clerkId) => {
  try {
    const user = await User.findOneAndDelete({ clerkId });
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

// Get user by ID
export const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};