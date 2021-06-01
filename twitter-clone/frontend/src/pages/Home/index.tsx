import {
    Button,
    Container, Divider,
    Grid, InputAdornment, ListItem, ListItemText,
    Paper,
    Typography,
} from '@material-ui/core';
import React from 'react';
import {Tweet} from "../../component/Tweet";
import {SideMenu} from "../../component/SideMenu";
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import {List} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import {AddTweetForm} from "../../component/AddTweetForm";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../component/SearchTextField";
import {useDispatch, useSelector} from "react-redux"
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Tags} from "../../component/Tags";
import {Route} from 'react-router-dom'
import {BackButton} from "../../component/BackButton";
import {FullTweet} from "./component/FullTweet";


export const Home = () => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();

    const tweets = useSelector(selectTweetsItems)
    const isLoading = useSelector(selectIsTweetsLoading)


    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"}>
                            <Route path={'/home/:any'}>
                                <BackButton classes={classes}/>
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant={'h6'}>Главная</Typography>
                            </Route>
                            <Route path={'/home/tweet'}>
                                <Typography  variant={'h6'}>
                                    Твитнуть
                                </Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>
                        <Route path={'/home'} exact>
                            {isLoading ? (<div className={classes.tweetsCentred}>
                                    <CircularProgress/>
                                </div>
                            ) : (
                                tweets.map((tweet) => <Tweet _id={tweet._id} key={tweet._id} text={tweet.text}
                                                             classes={classes} user={tweet.user}/>)
                            )}
                        </Route>


                        <Route path={'/home/tweet/:id'} component={FullTweet} exact/>

                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhgc6v1E99RPxrsY-lcTXmQo84PMWxJOnFxJ4QznLA6-e-QbPsdB6pApksNSigvDBCBI&usqp=CAU"
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Антон Павлович Чехов"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                @AntonChehov
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
};


