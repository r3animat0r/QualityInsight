// @ts-check
import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 *
 * @param {Object} props
 * @param {string} props.ID
 * @param {string} props.user
 * @param {string} props.timestamp
 * @param {string} props.comment
 * @returns
 */

export default function ArticleRevision(props) {
  return (
    <div className="search-result">
      <Tooltip
        classes={{ popper: "tip" }}
        title="Click here to select this revision"
      >
        <Button classes={{ root: "select-button-rev" }} variant="contained">
          Select
        </Button>
      </Tooltip>
      <div id="revision">
        <Typography variant="h6">Revision ID: {props.ID}</Typography>
        <Typography variant="body2" color="textSecondary">
          User: {props.user} <br />
          Timestamp: {props.timestamp} <br />
          Comment: {props.comment}
        </Typography>
      </div>
    </div>
  );
}
