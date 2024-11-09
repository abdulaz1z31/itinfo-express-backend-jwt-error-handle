import { Category } from "../database/models/index.model.js";

export const createCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json({ message: "Category created", category: newCategory });
    } catch (err) {
        next(err);
    }
};

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
};

export const updateCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category updated", category: updatedCategory });
    } catch (err) {
        next(err);
    }
};

export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (err) {
        next(err);
    }
};

export const deleteCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted", category: deletedCategory });
    } catch (err) {
        next(err);
    }
};
