import "./FoundRevisions.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import ArticleRevision from "../components/ArticleRevision";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";

/* let results = [
  {
    ID: "1027689158",
    user: "username",
    timestamp: "09 June 2021, 12:01:21",
    comment:
      "Edit comment here, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    ID: "1027689158",
    user: "username",
    timestamp: "09 June 2021, 12:01:21",
    comment: "Edit comment here.",
  },
]; */

export default function FoundArticles() {
  const [results, setResults] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let articleName = new URLSearchParams(location.search).get("article");

  useEffect(() => {
    axios
      .get("http://localhost:5000/found-revisions?article=" + articleName)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Button
            onClick={() => {
              history.goBack();
            }}
            classes={{ root: "back-button" }}
            variant="contained"
          >
            Back to article selection
          </Button>
        </div>
        <div className="whatis">
          <div className="text">What are revisions?</div>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div className="icon">
              <Tooltip
                classes={{ popper: "help" }}
                title={
                  <React.Fragment>
                    <Typography variant="h6" align="left">
                      Revisions
                    </Typography>
                    <Typography variant="body2" align="left">
                      Revisions are article updates. <br></br>
                      They are sorted by time with the most current revision on
                      top. Only the ten latest revisions are possible to choose.
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
                  <HelpIcon classes={{ root: "help-icon" }} fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </div>
      </div>
      {results.map((item) => (
        <ArticleRevision
          article={articleName}
          key={item.key}
          revid={item.revid}
          user={item.user}
          comment={item.comment}
        />
      ))}
    </div>
  );
}
