import React, {ReactElement} from 'react';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router-dom";
import {useHomeStyles} from "../pages/Home/theme";

interface BackButtonProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const BackButton: React.FC<BackButtonProps> = ({classes}:BackButtonProps):ReactElement => {

    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return (
        <IconButton className={classes.tweetsHeaderBack}  color={'primary'}>
            <ArrowBackIcon onClick={handleClickButton} color={'primary'}/>
        </IconButton>
    );
};

