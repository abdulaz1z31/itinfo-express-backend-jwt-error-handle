import Joi from "joi"

export const userSchema = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    email:Joi.string().email(),
    role:Joi.string().optional()
});