import React from 'react';
import {Divider, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";

import {useHomeStyles} from "../pages/Home/theme";

import {useSelector} from "react-redux";

import {selectIsTagsLoading, selectTagsItems} from "../store/ducks/tags/selector";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Link} from 'react-router-dom';


interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement => {

    const isLoading = useSelector(selectIsTagsLoading)
    const items = useSelector(selectTagsItems)

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {isLoading ? (
                    <div className={classes.tweetsCentred}>
                        <CircularProgress/>
                    </div>
                ) : (
                    items.map((obj) => <React.Fragment key={obj._id}>
                        <ListItem className={classes.rightSideBlockItem}>
                            <Link to={`/home/search?q=${obj.name}`}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Твитов: {obj.count}
                                        </Typography>
                                    }
                                />
                            </Link>
                        </ListItem>
                        <Divider component="li"/>
                    </React.Fragment>))}
            </List>
        </Paper>
    );
};

