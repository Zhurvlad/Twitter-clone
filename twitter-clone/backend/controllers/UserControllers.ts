import express from 'express';
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator';
import {UserModel, UserModelDocumentInterface, UserModelInterface} from '../models/UserModel';
import { generateMD5 } from '../utils/generateHash';
import {SendEmail}  from '../utils/sendEmail';
import {isValidObjectId} from '../utils/IsValidObjectId'



class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();

            res.json({
                status: 'success',
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    //Получаем айди пользователя
    async show(req: any, res: express.Response): Promise<void> {
        try {
            const userId = req.params.id;


            //Проверка АЙди вот по этой функции котороая выше
            if(!isValidObjectId(userId)){
                res.status(400).send();
                return;
            }

                //Если находим пользователя то возвращаем его и говорим что всё ок
            const user = await UserModel.findById(userId).exec();

            if(!user) {
                res.status(404).send();
                return;
            }

            console.log(user.password, user.confirmHash)
            res.json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ status: 'error', errors: errors.array() });
                return;
            }
            //Добавляем в БД пользователя с сохранённмимы данными в т.ч. и пароль
            const data: UserModelInterface = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: generateMD5(req.body.password + process.env.SECRET_KEY),
                confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),

            };



            const user = await UserModel.create(data);
            //Разобраться с вонючим мэйлером!!!!!!!!!
            SendEmail(
                {
                    emailFrom: 'admin@twitter.com',
                    emailTo: data.email,
                    subject: 'Подтверждение почты Twitter Clone Tutorial',
                    html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${
                        process.env.PORT || 5555
                    }/auth/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
                },
                (err: Error | null) => {
                    if (err) {
                        res.status(500).json({
                            status: 'error',
                            message: err,
                        });
                    } else {
                        res.status(201).json({
                            status: 'success',
                            data: user,
                        });
                    }
                },
            );

        } catch (error) {
            res.status(502).json({
                status: 'error',
                message: 'Упппссс ошибочка',
            });
        }
    }

    async verify(req: any, res: express.Response): Promise<void> {
        try {
            const hash = req.query.hash;

            if (!hash) {
                res.status(400).send();
                return;
            }

            const user = await UserModel.findOne({ confirmHash: hash }).exec();

            if (user) {
                user.confirmed = true;
                user.save();

                res.json({
                    status: 'success',
                });
            } else {
                res.status(404).json({ status: 'error', message: 'Пользователь не найден' });
            }


        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async afterLogin(req: express.Request, res: express.Response): Promise<void> {
        try {
            // @ts-ignore
            //Проверяем если пользователь если есть то в конец добавляем токен
            const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined
            res.json({
                status: 'success',
                data: {
                    ...user,
                    token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || '123', {
                        expiresIn: '30d',
                    })
                }
            })

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async getUserInfo(req: express.Request, res: express.Response): Promise<void> {
        try {
            // @ts-ignore
            //Проверяем если пользователь если есть то в конец добавляем токен
            const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined
            res.json({
                status: 'success',
                data: user,
            })

        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }
}

export const UserCtrl = new UserController();



/*
import express from 'express'
import {UserModel} from "../models/UserModel";

import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";

import {SendEmail} from "../utils/sendEmail";

class UserControllers {
    //Получаем всех юзеров
    async index(_req: express.Request, res: express.Response): Promise<void> {
        //Находим юзеров и возвращаем через Exec
        try {
            const users = await UserModel.find({}).exec();


            //Делаем определённый формат передачи данных
            res.json({
                status: 'success',
                data: users
            })
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }

    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({status: 'error', message: errors.array()})
                return;
            }
            //Создаём пользователя получая значения
            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
                confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString())
            };



            const user = await UserModel.create(data);

            res.json({
                status: 'success',
                data: user,
            });

            SendEmail({
                    emailFrom: "admin@twitter.com",
                    emailTo: data.email,
                    subject: "Подтверждение почты React Twitter",
                    html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${process.env.PORT || 5555}/users/verify?hash=${data.confirmHash}">по этой ссылке</a>`
                },
                (err: Error | null) => {
                    if (err) {
                        res.json({
                            status: 'error',
                            message: err
                        })
                    } else {
                        res.json({
                            status: 'success',
                            data: user,
                        })
                    }
                });
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }

    async verify(req: express.Request, res: express.Response): Promise<void> {
        //Находим юзеров и возвращаем через Exec
        try {
            const hash = req.query.hash;

            if(!hash){
                res.status(400).send();
                return;
            }

            const users = await UserModel.find({confirmHash: }).exec();


            //Делаем определённый формат передачи данных
            res.json({
                status: 'success',
                data: users
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }

    }

export const UserCtrl = new UserControllers()*/
