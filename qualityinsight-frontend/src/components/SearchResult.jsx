// @ts-check
import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

/**
 *
 * @param {Object} props
 * @param {string} props.key
 * @param {string} props.articleName
 * @param {string} props.articleURL
 * @returns
 */
export default function SearchResult(props) {
  return (
    <div className="search-result" key={props.key}>
      <Tooltip
        classes={{ popper: "tip" }}
        title="Click here to select this article"
      >
        <Link
          className="button-link"
          to={"/found-revisions?article=" + props.articleName}
        >
          <Button classes={{ root: "select-button" }} variant="contained">
            Select
          </Button>
        </Link>
      </Tooltip>
      <div id="article">
        <Typography variant="h6">{props.articleName}</Typography>
        <Typography variant="body2">
          {props.articleURL}
          <IconButton
            edge="start"
            size="small"
            href={props.articleURL}
            target="_blank"
          >
            <OpenInNewIcon />
          </IconButton>
        </Typography>
      </div>
    </div>
  );
}
