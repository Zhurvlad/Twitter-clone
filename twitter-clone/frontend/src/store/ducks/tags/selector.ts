import {RootState} from "../../store";

import {createSelector} from 'reselect';
import {LoadingState, TagsState} from "./tweets/contracts/state";

export const selectTags = (state: RootState) :TagsState => state.tags

export const  selectTagsItems = createSelector(selectTags, tags => tags.items)

export const selectLoadingState = (state: RootState):LoadingState => selectTags(state).loadingState

export const selectIsTagsLoading = (state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTagsLoaded = (state: RootState):boolean => selectLoadingState(state) === LoadingState.LOADED
