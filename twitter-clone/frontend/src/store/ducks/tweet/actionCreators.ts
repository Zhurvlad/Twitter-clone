import {LoadingState, TweetState} from "./tweets/contracts/state";
import {Action} from 'redux'
import {Tweet} from "../tweets/contracts/state";

export enum TweetActionType {
    SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
    SET_TWEET_LOADING_STATE = 'tweet/SET_TWEET_LOADING_STATE'
}


export interface FetchTweetActionInterface extends Action<TweetActionType>{
    type: TweetActionType.FETCH_TWEET_DATA,
    payload: string,
}

export const fetchTweetData = (payload: string): FetchTweetActionInterface => ({
    type: TweetActionType.FETCH_TWEET_DATA,
    payload
});


export interface SetTweetActionInterface extends Action<TweetActionType>{
    type: TweetActionType.SET_TWEET_DATA,
    payload: TweetState['data'],
}

export const setTweetData = (payload: TweetState['data']): SetTweetActionInterface => ({
    type: TweetActionType.SET_TWEET_DATA,
    payload,
});



export interface SetTweetLoadingStateInterface extends Action<TweetActionType>{
    type: TweetActionType.SET_TWEET_LOADING_STATE,
    payload: LoadingState,
}

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateInterface => ({
    type: TweetActionType.SET_TWEET_LOADING_STATE,
    payload,
});



export type TweetActions =
    SetTweetActionInterface
    | SetTweetLoadingStateInterface
    | FetchTweetActionInterface;