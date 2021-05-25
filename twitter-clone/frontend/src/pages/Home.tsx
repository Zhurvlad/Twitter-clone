import {
    Button,
    Container, Divider,
    Grid, InputAdornment, ListItem, ListItemText,
    makeStyles,
    Paper,
    Theme,
    Typography,
    withStyles
} from '@material-ui/core';
import React from 'react';
import {grey} from "@material-ui/core/colors";
import {Tweet} from "../component/Tweet";
import {SideMenu} from "../component/SideMenu";
import {TextField} from '@material-ui/core';
import {Avatar} from '@material-ui/core';
import {TextareaAutosize} from '@material-ui/core';
import classNames from 'classnames'
import {IconButton} from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import {List} from '@material-ui/core';
import {ListItemAvatar} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main
                },
                '& svg path': {
                    color: theme.palette.primary.main
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 30,
            left: -10,
            padding: '0 25px 0 20px',
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        }
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(1)
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListIcon: {
        fontSize: 28,
        marginLeft: -5
    },
    logo: {
        margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 10px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 15,
        '&:hover': {
            backgroundColor: 'rgb(245, 248,250)'
        }
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetFooter: {
        position: 'relative',
        left: -15,
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 450
    },
    tweetUserName: {
        color: grey[500],
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },


}))

export const SearchTextField = withStyles((theme: Theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '&.Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {borderWidth: 1, borderColor: theme.palette.primary.main},
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': {borderColor: 'transparent'},
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
    },
}))(TextField);


export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"}>
                            <Typography variant={'h6'}>
                                Главная
                            </Typography>
                        </Paper>
                        <Paper>
                            <div className={classes.addForm}>
                                <div className={classes.addFormBody}>
                                    <Avatar
                                        className={classes.tweetAvatar}
                                        alt={'Аватарка пользователя UserAvatar'}
                                        src={'https://cdnimg.rg.ru/img/content/145/73/28/Esenin_d_850.jpg'}
                                    />
                                    <TextareaAutosize
                                        className={classes.addFormTextarea}
                                        placeholder={'What is it?'}
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
                                        <>
                                            <span>228</span>
                                            <div className={classes.addFormCircleProgress}>
                                                <CircularProgress
                                                    variant="static"
                                                    size={20}
                                                    thickness={5}
                                                    /* value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                                     style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}*/
                                                />
                                                <CircularProgress
                                                    style={{color: 'rgba(0, 0, 0, 0.1)'}}
                                                    variant="static"
                                                    size={20}
                                                    thickness={5}
                                                    value={100}
                                                />
                                            </div>
                                        </>
                                        <Button


                                            color="primary"
                                            variant="contained">
                                            Твитнуть
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                        {[...new Array(20).fill(<Tweet text={'Вы любите розы?\n' +
                        'а я на них срал!\n' +
                        'стране нужны паровозы,\n' +
                        'нам нужен металл!\n' +
                        'товарищ!\n' +
                        'не охай,\n' +
                        'не ахай!\n' +
                        'не дёргай узду!\n' +
                        'коль выполнил план,\n' +
                        'посылай всех\n' +
                        'в пизду\n' +
                        'не выполнил —\n' +
                        'сам\n' +
                        'иди\n' +
                        'на\n' +
                        'хуй.'} classes={classes} user={{
                            fullname: 'vasya',
                            username: '123123',
                            avatarUrl: 'https://www.mmsk.ru/objectdata/CatalogUnitImpl/41542/Mayakovskiy-01_Md.jpg'
                        }}/>)]}
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
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Санкт-Петербург"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 3 331
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#коронавирус"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 163 122
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="Беларусь"
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: 13 554
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>
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


