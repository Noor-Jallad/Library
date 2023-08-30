import joi from 'joi';
import { generalFeilds } from '../../Middleware/validation.js';

export const token= joi.object({
    token: joi.string().required()
}).required()

export const createAdmin = joi.object({
    userName:joi.string().alphanum().min(3).max(20).required().messages({
        'any.required':'username is required',
        'string.empty':'username is required'
    }),
    email:generalFeilds.email,
    password:generalFeilds.password,
    cPassword:joi.string().valid(joi.ref('password')).required(),
    role:joi.string()
}).required()

export const updateAdmin=joi.object({
        userName:joi.string(),
        status:joi.string(),
        gender:joi.string(),
        role:joi.string(),
        email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:joi.string().min(3),
        adminId: generalFeilds.id
    }).required()

export const deleteAdmin = joi.object({
        adminId:generalFeilds.id
    }).required()

export const getSpecificAdmin = joi.object({
    adminId: generalFeilds.id
}).required()

