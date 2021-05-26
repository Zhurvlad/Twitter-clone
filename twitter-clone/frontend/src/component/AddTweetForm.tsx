import React, {FormEvent} from 'react';
import classNames from "classnames";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

import {TextareaAutosize} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {useHomeStyles} from "../pages/Home/theme";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const MAX_LENGTH = 300

export const AddTweetForm:React.FC<AddTweetFormProps> = ({
                                                             classes,
                                                             maxRows
}:AddTweetFormProps):React.ReactElement => {

    const [text, setText] = React.useState<string>('');
    const textLimitPercent= Math.round((text.length/300) *100)
    const textCountLimit = MAX_LENGTH - text.length

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    const handleClickAddTweet = ():void => {
        setText('')
    }

    return (
        <div>
            <div >
                <div className={classes.addFormBody}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={'Аватарка пользователя UserAvatar'}
                        src={'https://cdnimg.rg.ru/img/content/145/73/28/Esenin_d_850.jpg'}
                    />
                    <TextareaAutosize
                        onChange={handleChangeTextarea}
                        className={classes.addFormTextarea}
                        placeholder={'What is it?'}
                        value={text}
                        rowsMax={maxRows}
                    />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                        <IconButton color="primary">
                            <ImageOutlinedIcon style={{fontSize: 26}}/>
                        </IconButton>
                        <IconButton color="primary">
                            <EmojiIcon style={{fontSize: 26}}/>
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        {text && <>
                            <span>{textCountLimit}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress
                                    style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                    variant="static"
                                    size={20}
                                    thickness={5}
                                    value={100}
                                />
                            </div>
                        </> }
                        <Button
                            onClick={handleClickAddTweet}
                            disabled={text.length >= MAX_LENGTH}
                            color="primary"
                            variant="contained">
                            Твитнуть
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

