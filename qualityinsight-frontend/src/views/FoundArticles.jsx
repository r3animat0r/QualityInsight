import "./FoundArticles.css";
import React from "react";

import SearchResult from "../components/SearchResult";
import Textfield from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function FoundArticles() {
  return (
    <div id="search">
      <Textfield
        selected
        classes={{ root: "searchbar", selected: "selected" }}
        value="Free University"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton /* onClick="" */ edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <SearchResult />
      <SearchResult />
    </div>
  );
}
