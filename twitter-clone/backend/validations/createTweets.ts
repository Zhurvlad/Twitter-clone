import {body} from 'express-validator'

export const createTweetValidations = [
    body('text', 'Введите текст твита')
        .isString()
        .isLength({
            max: 300,
        })
        .withMessage('Максимальная длина твита 300 символов.'),

    ]