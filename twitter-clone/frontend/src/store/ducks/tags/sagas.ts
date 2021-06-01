import {setTags, setTagsLoadingState, TagsActionType} from "./actionCreators";
import {takeEvery, call, put} from 'redux-saga/effects'
import {LoadingState} from "./tweets/contracts/state";
import {TagsApi} from "../../../services/api/tagsApi";


export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags)
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }

}

export function* tagsSaga() {
    yield takeEvery(TagsActionType.FETCH_TAGS, fetchTagsRequest)
}