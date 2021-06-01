import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {Action} from 'redux'

export enum TweetsActionType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_TWEETS,
    payload: TweetsState['items'],
}

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionType.SET_TWEETS,
    payload,
});


export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionType.FETCH_ADD_TWEET,
    payload,
});

export interface FetchAddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_ADD_TWEET,
    payload: string,
}


export interface AddTweetActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.ADD_TWEET,
    payload: Tweet,
}

export const AddTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionType.ADD_TWEET,
    payload,
});


//Получение твитов
export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.FETCH_TWEETS,
}

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionType.FETCH_TWEETS,
});




export interface SetTweetsLoadingStateInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_LOADING_STATE,
    payload: LoadingState,
}

export interface SetTweetsLoadingStateInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_LOADING_STATE,
    payload: LoadingState,
}

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
    type: TweetsActionType.SET_LOADING_STATE,
    payload,
});


//Интерфэйс + Экшен на вывод ошибки по добавлению твита
export interface SetAddFormStateActionInterface extends Action<TweetsActionType> {
    type: TweetsActionType.SET_ADD_FORM_STATE,
    payload: AddFormState,
}

export const SetAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
    type: TweetsActionType.SET_ADD_FORM_STATE,
    payload
});


export type TweetsActions =
    SetTweetsActionInterface
    | SetTweetsLoadingStateInterface
    | FetchTweetsActionInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | SetAddFormStateActionInterface