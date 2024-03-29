import axios from 'axios'
import {LoginFormProps} from "../../pages/SignIn/components/LoginModal";

interface ResponseApi {
    status: string;
    data: any
}



export const AuthApi = {
   async signIn(postData:LoginFormProps): Promise<ResponseApi> {
       const {data} = await axios.post<ResponseApi>('/auth/login', {username: postData.email, password: postData.password})
        return data
    }
}

