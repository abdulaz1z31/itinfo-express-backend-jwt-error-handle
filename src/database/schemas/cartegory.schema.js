import Joi from "joi";
export const cartegorySchema = Joi.object({
    name:Joi.string().alphanum().min(3).max(30).required(),
    description:Joi.string().required(),
});