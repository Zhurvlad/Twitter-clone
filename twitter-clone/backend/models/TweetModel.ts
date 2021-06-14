import {model, Schema} from "mongoose";

//Интерфейс для тайп скрипта
export interface TweetModelInterface {
    _id?: string;
    text: string;
    user: TweetModelInterface;
    likes?: number;
    retweets?: boolean;
    replies?: string;
}

//Делаем отдельную переменную для обьединения интерфейса нашего + монгуус
export type TweetModelDocumentInterface = TweetModelInterface & Document;

//Описываем параметры страницы входа юзера получаем от пользователя
export const TweetSchema = new Schema<TweetModelInterface>({
    text: {
        required: true,
        type: String,
        maxLength: 300,
    },
    user: {
        ref: 'user',
        required: true,
        //Нужен для того что бы делать потом релейшен шип и связывать с таблицами юзеров
        type: Schema.Types.ObjectId,
    },
}, {
    timestamps: true
})

export const TweetModel = model<TweetModelDocumentInterface>('Tweet', TweetSchema)