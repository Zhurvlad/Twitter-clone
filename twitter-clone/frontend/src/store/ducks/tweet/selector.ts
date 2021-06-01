import {RootState} from "../../store";

import {createSelector} from 'reselect';
import {LoadingState, TweetState} from "./tweets/contracts/state";

export const selectTweet = (state: RootState) :TweetState => state.tweet

export const  selectTweetData = createSelector(selectTweet, tweet => tweet.data)

export const selectLoadingState = (state: RootState):LoadingState => selectTweet(state).loadingState

export const selectIsTweetLoading = (state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetLoaded = (state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADED
