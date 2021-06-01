import React from 'react';
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import {useHomeStyles} from "../pages/Home/theme";
import {Route, Link} from 'react-router-dom'


interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user, _id}: TweetProps): React.ReactElement => {

    return (
        <Link className={classes.tweetWrapper}  to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant={"outlined"}>
                <Avatar className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${user.username}`}
                        src={user.avatarUrl}
                />
                <div>
                    <Typography>
                        <b>{user.username}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.fullname}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1 ч</span>
                    </Typography>
                    <Typography variant={'body1'} gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <ChatBubbleIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepeatIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <FavoriteBorderIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <ReplyIcon style={{fontSize: 20}}/>
                            </IconButton>
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </Paper>
        </Link>
    );
};

