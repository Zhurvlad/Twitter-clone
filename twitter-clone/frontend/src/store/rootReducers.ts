import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/reducer";


export const rootReducer = combineReducers({
    tweets: tweetsReducer
})
