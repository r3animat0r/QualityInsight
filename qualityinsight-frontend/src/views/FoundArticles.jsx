import "./FoundArticles.css";
import React from "react";
import { useHistory } from "react-router-dom";

import SearchResult from "../components/SearchResult";
import Textfield from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

let results = [
  { articleName: "Free Uni", articleURL: "en.wikipedia.com" },
  { articleName: "Free Uni 2", articleURL: "en.wikipedia.com" },
];

export default function FoundArticles() {
  let searchValue;
  let history = useHistory();

  return (
    <div id="search">
      <form
        onSubmit={() =>
          history.push({
            pathname: "/found-articles",
            search: "?search=" + searchValue,
            state: {
              update: true,
            },
          })
        }
      >
        <Textfield
          selected
          classes={{ root: "searchbar" }}
          placeholder="Search for an article on en.wikipedia.org"
          defaultValue="Free University"
          variant="outlined"
          size="small"
          onInput={(ev) => {
            searchValue = ev.target.value;
            console.log(searchValue);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    history.push({
                      pathname: "/found-articles",
                      search: "?search=" + searchValue,
                      state: {
                        update: true,
                      },
                    });
                  }}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {results.map(SearchResult)}
    </div>
  );
}
