import './FoundRevisions.css';
import React from 'react';

import ArticleRevision from '../components/ArticleRevision';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';

export default function FoundArticles() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div id="content">
            <div className="head space-between">
                <div>
                    <Button classes= {{ root: "back-button" }} variant="contained">Back to article selection</Button>
                </div>
                <div className="whatis">
                    <div className="text">
                        What are revivisions? 
                    </div>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div className="icon">
                            <Tooltip classes={{ popper: "help" }} 
                                title={
                                    <React.Fragment>
                                        <Typography variant="h6" align="left">
                                            Revisions
                                        </Typography>
                                        <Typography variant="body2" align="left">
                                            Revisions are article updates. <br></br>
                                            They are sorted by time with the most current revision on top. 
                                            Only the ten latest revisions are possible to choose.
                                        </Typography>
                                    </React.Fragment>
                                }
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                interactive
                            >
                                <IconButton onClick={handleTooltipOpen} size="small">
                                    <HelpIcon classes= {{ root: "help-icon" }} fontSize="large" />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </ClickAwayListener>
                </div>
            </div>
            <ArticleRevision />
            <ArticleRevision />
        </div>
    )
}