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
                        <div  className={classes.addForm}>
                            <AddTweetForm classes={classes}/>
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


