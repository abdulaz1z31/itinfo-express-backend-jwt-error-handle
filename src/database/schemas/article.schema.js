import Joi from "joi";
import mongoose from "mongoose";

export const articleSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),       
    content: Joi.string().required(),                    
    category: Joi.string().required().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helpers.error("any.invalid");         
        }
        return value;
    }),
    author: Joi.string().required().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
            return helpers.error("any.invalid");           
        }
        return value;
    }),
    publishedAt: Joi.date().default(() => new Date())
});

