import React from 'react';
import {useDispatch} from 'react-redux'
import {setUserLoadingStatus} from "../../store/ducks/user/actionCreators";
import {LoadingState} from "../../store/types";
import {axios} from "../../Core/axios";

export const ActivatePage = () => {
    const dispatch = useDispatch();
    const [isActivate, setActivated] = React.useState<boolean>(false)

    React.useEffect(()=> {
        dispatch(setUserLoadingStatus(LoadingState.NEVER))
        const hash = window.location.pathname.split('/').pop()
        axios.get('/auth/verify?hash=' + hash).then(() => {
            
        })
    })

    return (
        <div>
            ..........
        </div>
    );
};

