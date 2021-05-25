import React from 'react';
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentityOutlined";
import BorderColorIcon from '@material-ui/icons/BorderColor';

import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (

        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuItem}>
                <IconButton className={classes.logo} aria-label={'delete'} color={"primary"}>
                    <TwitterIcon className={classes.logoIcon}/>
                </IconButton>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Поиск
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <MailIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Сообщения
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <BookmarkBorderIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Закладки
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <PermIdentityIcon className={classes.sideMenuListIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                            Профиль
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <Button className={classes.sideMenuTweetButton}
                        variant='contained'
                        color={'primary'}
                        fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <BorderColorIcon/>
                    </Hidden>
                </Button>
            </li>
        </ul>

    );
};

