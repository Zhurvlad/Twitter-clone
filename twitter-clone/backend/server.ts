import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import {UserCtrl} from "./controllers/UserControllers";

import {registerValidations} from "./validations/register";
import {passport} from "./core/passport";
import {TweetCtrl} from "./controllers/TweetsController";
import {createTweetValidations} from "./validations/createTweets";


require('./core/db')



const app = express();

//Разобраться с CORS политикой

app.use(function (_req, res, next) {
    res.header('Content-Type', 'application/json')
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.set('Access-Control-Allow-Credentials', 'true')
    next();
});


//Делаем так что бы моё приложение использовало Экспресс и пасспорт
app.use(express.json());
app.use(passport.initialize());

app.get('/users', UserCtrl.index)
app.get('/users/me', passport.authenticate('jwt', { session: false }), UserCtrl.getUserInfo);
app.get('/users/:id', UserCtrl.show)

app.get('/tweets', TweetCtrl.index)
app.get('/tweets/:id', TweetCtrl.show)
app.delete('/tweets/:id',passport.authenticate('jwt'), TweetCtrl.delete)
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetCtrl.update)
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetCtrl.create)


app.get('/auth/verify', registerValidations, UserCtrl.verify)
app.post('/auth/register', registerValidations, UserCtrl.create)
app.post('/auth/login', passport.authenticate('local'),UserCtrl.afterLogin);




app.listen(process.env.PORT, ():void => {
    console.log("SERVER RUNN1In!")
})