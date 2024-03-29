
import {TweetActions, TweetActionType} from "./actionCreators";
import produce, {Draft} from 'immer'
import {LoadingState, TweetState} from "./tweets/contracts/state";

export const initialTweetState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {

    switch (action.type) {
        case TweetActionType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED
            break;

        case TweetActionType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetActionType.SET_TWEET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

    }


}, initialTweetState);