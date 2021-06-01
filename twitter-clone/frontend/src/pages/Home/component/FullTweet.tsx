import React, {ReactElement} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import {selectIsTweetLoaded, selectIsTweetLoading, selectTweetData} from "../../../store/ducks/tweet/selector";
import {Tweet} from "../../../component/Tweet";
import {useHomeStyles} from '../theme';
import CircularProgress from "@material-ui/core/CircularProgress";

export const FullTweet: React.FC = (): ReactElement | null => {
    const classes = useHomeStyles()
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData)
    const isLoading = useSelector(selectIsTweetLoading)
    const params: { id?: string } = useParams();
    const id = params.id

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id))
        }

            //Очищаем Редакс от твита(в который зашли) после того как вернулись на страницу назад по стрелке
        return () => {
dispatch(setTweetData(undefined))
        }
    }, [dispatch, id])


    if(isLoading){
        return <div className={classes.tweetsCentred}>
            <CircularProgress/>
        </div>
    }

    if (tweetData) {
        return <Tweet classes={classes} {...tweetData} />
    }

    return null
    ;
};

