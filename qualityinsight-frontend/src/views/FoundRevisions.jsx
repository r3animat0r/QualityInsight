import './FoundRevisions.css';
import React from 'react';

import ArticleRevision from '../components/ArticleRevision';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

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
                    <div className="icon">
                        <Tooltip classes={{ popper: "help" }} title="Placeholder">
                            <HelpIcon fontSize="large" />
                        </Tooltip>
                    </div>
                </div>
            </div>
            <ArticleRevision />
            <ArticleRevision />
        </div>
    )
}