import axios from 'axios'
import {TagsState} from "../../store/ducks/tags/tweets/contracts/state";


export const TagsApi = {
    fetchTags(): Promise<TagsState['items']> {
        return axios.get('/themes').then(({data}) => data)
    }
}