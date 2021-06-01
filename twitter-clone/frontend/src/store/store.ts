import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./rootReducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TagsState} from "./ducks/tags/tweets/contracts/state";
import {TweetState} from "./ducks/tweet/tweets/contracts/state";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

 export interface RootState {
    tweets: TweetsState;
    tags: TagsState,
     tweet: TweetState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)