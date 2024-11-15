import Joi from "joi"

export const registerSchema = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    password:Joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")),
    email:Joi.string().email(),
    role:Joi.string().optional().default("user")
});