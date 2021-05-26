import {TweetsState} from "./tweets/contracts/state";
import {Action} from 'redux'

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS'
}

export interface SetTweetsActionInterface extends Action<TweetsActionType>{
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState['items'],
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionType.SET_TWEETS,
    payload,
});

export type TweetsActions = SetTweetsActionInterface;