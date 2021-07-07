import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function ArticleRevision() {
    return (
        <div className="search-result">
            <Tooltip classes={{ popper: "tip" }} title="Click here to select this revision">
                <Button classes= {{ root: "select-button-rev" }} variant="contained">Select</Button>
            </Tooltip>
            <div id="revision">
                <Typography variant="h6">Revision ID: 1027689158</Typography>
                <Typography variant="body2" color="textSecondary">
                User:       username <br/>
                Timestamp:  09 June 2021, 12:01:21 <br/>
                Comment:    Edit comment here, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod   
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                            duo dolores et ea rebum. 
                </Typography>
            </div>
        </div>
    )
}