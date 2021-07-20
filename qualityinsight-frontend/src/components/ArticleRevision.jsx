// @ts-check
import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 *
 * @param {Object} props
 * @param {string} props.key
 * @param {string} props.revid
 * @param {string} props.user
 * @param {string} props.timestamp
 * @param {string} props.comment
 * @param {string} props.article
 * @returns
 */

export default function ArticleRevision(props) {
  return (
    <div className="search-result" key={props.key}>
      <Tooltip
        enterDelay={500}
        leaveDelay={200}
        classes={{ popper: "tip" }}
        title="Click here to select this revision"
      >
        <Link
          className="button-link"
          to={"/explanation?article=" + props.article + "&revid=" + props.revid}
        >
          <Button classes={{ root: "select-button-rev" }} variant="contained">
            Select
          </Button>
        </Link>
      </Tooltip>
      <div id="revision">
        <Typography variant="h6">Revision ID: {props.revid}</Typography>
        <Typography variant="body2" color="textSecondary">
          User: {props.user} <br />
          Timestamp: {props.timestamp} <br />
          Comment: {props.comment}
        </Typography>
      </div>
    </div>
  );
}
