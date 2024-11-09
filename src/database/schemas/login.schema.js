import Joi from "joi"

export const loginSchema = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9!@#\\$%\\^&\\*()_\\-+=\\[\\]{}|;:'\",.<>?/]{4,30}$")),
});