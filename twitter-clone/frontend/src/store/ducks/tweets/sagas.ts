import {
    AddTweet,

    FetchAddTweetActionInterface,
    SetAddFormState,
    setTweets,
    setTweetsLoadingState,
    TweetsActionType
} from "./actionCreators";
import {takeEvery, call, put} from 'redux-saga/effects'
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";
import {fetchAddTweet} from "./actionCreators";


export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetRequest({payload}: FetchAddTweetActionInterface) {
    try {
        const data = {
            _id: Math.random().toString(36).substring(2),
            text: payload,
            user: {
                fullname: 'Test U',
                username: 'test',
                avatarUrl: "https://source.unsplash.com/random/100x100?9"
            }
        }
        const item = yield call(TweetsApi.addTweet, data)
        yield put(AddTweet(item))
    } catch (error) {
        //Если ошибка при добавлении твита то мы устанавливаем ошибку
        yield put(SetAddFormState(AddFormState.ERROR))
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest)
    yield takeEvery(TweetsActionType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}