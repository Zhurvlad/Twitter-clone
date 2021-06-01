import {LoadingState, TagsState} from "./tweets/contracts/state";
import {Action} from 'redux'

export enum TagsActionType {
    SET_TAGS = 'tags/SET_TAGS',
    FETCH_TAGS = 'tags/FETCH_TAGS',
    SET_LOADING_STATE = 'tags/SET_LOADING_STATE'
}


export interface FetchTagsActionInterface extends Action<TagsActionType>{
    type: TagsActionType.FETCH_TAGS,
}

export const fetchTags = (): FetchTagsActionInterface => ({
    type: TagsActionType.FETCH_TAGS,
});


export interface SetTagsActionInterface extends Action<TagsActionType>{
    type: TagsActionType.SET_TAGS,
    payload: TagsState['items'],
}

export const setTags = (payload: TagsState['items']): SetTagsActionInterface => ({
    type: TagsActionType.SET_TAGS,
    payload,
});



export interface SetTagsLoadingStateInterface extends Action<TagsActionType>{
    type: TagsActionType.SET_LOADING_STATE,
    payload: LoadingState,
}

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateInterface => ({
    type: TagsActionType.SET_LOADING_STATE,
    payload,
});



export type TagsActions =
    SetTagsActionInterface
    | SetTagsLoadingStateInterface
    | FetchTagsActionInterface;