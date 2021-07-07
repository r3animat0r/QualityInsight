import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function SearchResult() {
    return (
        <div className="search-result">
            <Tooltip classes={{ popper: "tip" }} title="Click here to select this article">
                <Button classes= {{ root: "select-button" }} variant="contained">Select</Button>
            </Tooltip>
            
            <div id="article">
                <Typography variant="h6">Free University</Typography>
                <Typography variant="body2">
                    https://en.wikipedia.org/wiki/Free_University
                    <IconButton edge="start" size="small" href="https://en.wikipedia.org/wiki/Free_University" target="_blank">
                        <OpenInNewIcon />
                    </IconButton>
                </Typography>
            </div>
        </div>
    )
}