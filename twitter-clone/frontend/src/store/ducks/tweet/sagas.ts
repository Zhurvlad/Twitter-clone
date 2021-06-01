import {FetchTweetActionInterface, setTweetData, setTweetLoadingState, TweetActionType} from "./actionCreators";
import {takeEvery, call, put} from 'redux-saga/effects'
import {LoadingState} from "./tweets/contracts/state";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {Tweet} from "../tweets/contracts/state";



export function* fetchTweetRequest({payload:tweetId}:FetchTweetActionInterface) {
    try {
        const data:Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId)
        yield put(setTweetData(data[0]))
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }

}

export function* tweetSaga() {
    yield takeEvery(TweetActionType.FETCH_TWEET_DATA, fetchTweetRequest)
}