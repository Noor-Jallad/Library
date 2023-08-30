import joi from 'joi';
import { generalFeilds } from '../../Middleware/validation.js';

export const updateBook={
    params:joi.object({
        bookId: generalFeilds.id
    }).required()
}

export const deleteBook = {
    params:joi.object({
        bookId:generalFeilds.id
    }).required()
}