import React from 'react';
import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentityOutlined";

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
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Поиск
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <MailIcon className={classes.sideMenuListIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <BookmarkBorderIcon className={classes.sideMenuListIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <div>
                    <PermIdentityIcon className={classes.sideMenuListIcon}/>
                    <Typography className={classes.sideMenuListItemLabel} variant={'h6'}>
                        Профиль
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuItem}>
                <Button className={classes.sideMenuTweetButton} variant='contained' color={'primary'} fullWidth>
                    Твитнуть
                </Button>
            </li>
        </ul>

    );
};

