import express from 'express';
import {UserModelInterface} from '../models/UserModel';
import {TweetModel} from "../models/TweetModel";
import {isValidObjectId} from "../utils/IsValidObjectId";
import {validationResult} from "express-validator";


class TweetsController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            //разобраться с .populate('users')
            const tweets = await TweetModel.find({}).sort({'createdAt': '-1'}).exec();

            res.json({
                status: 'success',
                data: tweets,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async show(req: any, res: express.Response): Promise<void> {
        try {
            const tweetId = req.params.id;


            //Проверка АЙди вот по этой функции котороая выше
            if (!isValidObjectId(tweetId)) {
                res.status(400).send();
                return;
            }

            //Если находим пользователя то возвращаем его и говорим что всё ок
            const tweet = await TweetModel.findById(tweetId).exec();

            if (!tweet) {
                res.status(404).send();
                return;
            }

            res.json({
                status: 'success',
                data: tweet,
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
            const user = req.user as UserModelInterface;


            if (user?._id) {

                //Валидация проверка добавления твита
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({status: 'error', errors: errors.array()});
                    return;
                }

                const data = {
                    text: req.body.text,
                    user: user._id,
                }

                const tweet = await TweetModel.create(data)

                res.json({
                    status: 'success',
                    data: await tweet.populate('user').execPopulate(),
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }
    }

    async delete(req: express.Request, res: express.Response): Promise<void> {
        const user = req.user as UserModelInterface;

        try {
            if (user) {
                const tweetId = req.params.id;
                if (!isValidObjectId(tweetId)) {
                    res.status(400).send();
                    return;
                }

                //Находим твит по Айди
                const tweet = await TweetModel.findById(tweetId)

                if (tweet) {

                    if (String(tweet.user._id) === String(user._id)) {
                        tweet.remove();
                        res.json({
                            status: 'success',
                            data: tweet,
                        });

                    } else {
                        res.status(403).send("ТВит удалён");
                    }

                } else {

                    res.status(404).send("ТВит удалён");

                }

                await TweetModel.deleteOne({_id: tweetId});

                res.json({
                    status: 'success',
                    data: tweet,
                });
            }


        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }

    }

    async update(req: express.Request, res: express.Response): Promise<void> {
        const user = req.user as UserModelInterface;

        try {
            if (user) {
                const tweetId = req.params.id;
                if (!isValidObjectId(tweetId)) {
                    res.status(400).send();
                    return;
                }

                //Находим твит по Айди
                const tweet = await TweetModel.findById(tweetId)

                if (tweet) {

                    if (String(tweet.user._id) === String(user._id)) {
                        const text = req.body.text
                        tweet.text = text;
                        tweet.save();
                        res.send();

                    } else {
                        res.status(403).send();
                    }

                } else {
                    res.status(404).send();
                }
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error,
            });
        }

    }

}

export const TweetCtrl = new TweetsController();


