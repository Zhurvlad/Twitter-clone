import {
       Container,
    createStyles,
    Grid,
    InputBase,
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


export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
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
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 15,
        '&:hover' : {
           backgroundColor: 'rgb(245, 248,250)'
        }
    },
    tweetAvatar: {
            width: theme.spacing(6),
            height: theme.spacing(6),
    },
    tweetUserName: {
        color: grey[500],

    },
    tweetFooter: {
        position: 'relative',
        left: -15,
        display: 'flex',
        justifyContent: 'space-between',
        width: 400
    },


}))

const SearchTextField = withStyles(() => createStyles({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        padding: 0,
        height: 35

    }
}))(InputBase)

export const Home = () => {
    const classes = useHomeStyles();

    // @ts-ignore
    return (
        <Container className={classes.wrapper} maxWidth={'lg'}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant={"outlined"}>
                        <Paper className={classes.tweetsHeader} variant={"outlined"}>
                            <Typography variant={'h6'}>
                                Главная
                            </Typography>
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
                <Grid item xs={3}>
                    <SearchTextField
                        fullWidth
                        placeholder={'Search on Twitter'}
                    />
                </Grid>
            </Grid>
        </Container>
    )
};


