import {LoadingState, TweetsState} from "./tweets/contracts/state";
import {TweetsActions, TweetsActionType} from "./actionCreators";
import produce, {Draft} from 'immer'

export const initialTweetsState: TweetsState= {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft:Draft<TweetsState>, action:TweetsActions) => {
 const {type, payload} = action

    switch (type) {
        case TweetsActionType.SET_TWEETS:
            draft.items = payload
    }
}, initialTweetsState);