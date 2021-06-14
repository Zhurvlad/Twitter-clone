import {model, Schema} from "mongoose";


export interface UserModelInterface {
    _id?: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmHash: string;
    confirmed?: boolean;
    location?: string;
    about?: string;
    website?: string;
}
export type UserModelDocumentInterface = UserModelInterface & Document;

//Описываем параметры страницы входа юзера получаем от пользователя
export const UserSchema = new Schema<UserModelInterface>({
    email:{
        unique: true,
        required: true,
        type: String,
    },
    fullname: {
        required: true,
        type: String,
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
  /*  timestamps: true,*/

    location: String,

    password: {
        required: true,
        type: String,
    },
    confirmed: {
        type: Boolean,
        default: false
    },

    confirmHash: {
        required: true,
        type: String,
    },
    about: String,
    website: String,

},
    {
        timestamps: true,
    })


//Скрываем пароль и хэш от юзера
UserSchema.set('toJSON', {
    transform: function(_: any, obj: { password: any; confirmHash: any; }) {
        delete obj.password;
        delete obj.confirmHash;
        return obj;
    }
})

export const UserModel = model<UserModelDocumentInterface>('User', UserSchema)