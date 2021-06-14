import crypto from 'crypto'

    //Генерируем Хэш
export const generateMD5 = (value:string): string => {
    return crypto.createHash('md5').update(value).digest('hex')
}