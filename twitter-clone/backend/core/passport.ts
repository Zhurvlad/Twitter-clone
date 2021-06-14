import passport from "passport";
import {Strategy as LocalStrategy} from 'passport-local'
import {ExtractJwt, Strategy as JWTstrategy} from 'passport-jwt'
import {UserModel, UserModelInterface} from "../models/UserModel";
import {generateMD5} from "../utils/generateHash";



passport.use(
    //Получаем логин и пароль
    new LocalStrategy(async (username, password, done):Promise<void> => {
       try {
           //Находим этого пользователя
        const user = await UserModel.findOne({$or: [{email:username}, {username}]}).exec();
        //Если нет юзера то возвращаем ошибку
        if(!user) {
            return done
            (null, false)
        }
            //Если есть юзер нашёлся и его пароли совпадают то возвращаем юзера иначе ошибку
           if (user.password === generateMD5(password + process.env.SECRET_KEY)) {
               return done(null, user)
           } else {
               return done
               (null, false)
           }

       }catch (error) {
           done(error, false)
       }
    }
));

///Тут какойто косяк беаный
passport.use(
    new JWTstrategy({
            secretOrKey: process.env.SECRET_KEY || Math.random().toString(),
        //Токен это ключ
            jwtFromRequest: ExtractJwt.fromHeader('token')
        },
        async (payload: { data: UserModelInterface }, done): Promise<void> =>{
        try {
            //Ищем пользователя из моей бд и сэйвим его
            const user = await UserModel.findById(payload.data._id).exec();

            if (user) {
                return done(null, user);
            }

            done(null, false);

        } catch (error) {
            done(error, false);
        }
}
    )
)

//Кодируем и декодируем юзера
// @ts-ignore
passport.serializeUser((user: UserModelInterface, done) => {
    done(null, user?._id);
});

passport.deserializeUser((id, done) => {
    // @ts-ignore
    UserModel.findById(id, (err, user) => {
        done(err, user);
    });
});


export {passport}