import Category from '../models/Category';

// Create a new category
export const createCategory = async (categoryData) => {
  try {
    const newCategory = new Category(categoryData);
    await newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error(`Error creating category: ${error.message}`);
  }
};

// Get all categories
export const getAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error(`Error fetching categories: ${error.message}`);
  }
};