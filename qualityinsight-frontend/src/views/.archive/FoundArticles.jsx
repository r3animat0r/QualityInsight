import "./FoundArticles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import SearchResult from "../../components/SearchResult";
import Textfield from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function FoundArticles() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://85.214.159.67:5000/")
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let history = useHistory();
  let searchValue = new URLSearchParams(useLocation().search).get("search");

  return (
    <div id="search">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          history.push({
            pathname: "/found-articles",
            search: "?search=" + searchValue,
            state: {
              update: true,
            },
          });
        }}
      >
        <Textfield
          selected
          classes={{ root: "searchbar" }}
          placeholder="Search for an article on en.wikipedia.org"
          defaultValue={searchValue}
          variant="outlined"
          size="small"
          onInput={(ev) => {
            searchValue = ev.target.value;
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end">
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
