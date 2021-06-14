import {body} from 'express-validator'

export const registerValidations = [
    body('email', 'Введите E-Mail')
        .isEmail()
        .withMessage('Неверный E-Mail')
        .isLength({
            min: 10,
            max: 100,
        })
        .withMessage('Неверная длинна почты. Допустимое колличество символов в E-Mail от 10 до 100.'),

    body('fullname', 'Введите имя')
        .isString()
        .isLength({
            min: 2,
            max: 40,
        })
        .withMessage('Допустимое колличество символов в имени от 2 до 16.'),

    body('username', 'Укажите логин')
        .isString()
        .isLength({
            min: 2,
            max: 40,
        })
        .withMessage('Допустимое колличество символов в логине от 2 до 40.'),

   body('password', 'Укажите пароль')
        .isString()
        .isLength({
            min: 6,
            max: 40,
        })
        .withMessage('Допустимое колличество символов в паролн от 6 до 40.')
       // Если пароли не совпадают то вывохим ошибку
       .custom((value, {req}) => {
           if(value != req.body.password2) {
               throw new Error('Пароли не совпадают');
           } else {
               return value;
           }
       }),

    ]