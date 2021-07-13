import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import Textfield from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
/* import SearchBar from '../components/SearchBar'; */

import SearchResult from "../components/SearchResult";
import Information from "../components/Information";

export default function Home() {
  let initValue = new URLSearchParams(useLocation().search).get("search");
  let history = useHistory();
  let [search, setSearch] = useState(initValue || "");
  const [results, setResults] = useState([]);

  // search term via query
  useEffect(() => {
    startSearch();
  }, []);

  // (update on) update search term
  useEffect(() => {
    history.push({
      pathname: "/",
      search: "?search=" + search,
      state: {
        search,
      },
    });
  }, [search]);

  // submit search
  let startSearch = () => {
    if (search.length == 0) {
      setResults([]);
      return;
    }

    axios
      .get("http://localhost:5000/?search=" + search)
      .then((response) => {
        console.log("SUCCESS", response);
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="home">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          startSearch();
        }}
      >
        <Textfield
          selected
          classes={{ root: "searchbar" }}
          placeholder="Search for an article on en.wikipedia.org"
          variant="outlined"
          defaultValue={search}
          size="small"
          onInput={(ev) => {
            setSearch(ev.target.value);
            console.log(ev.target.value);
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
      {results.length > 0 ? results.map(SearchResult) : <Information />}
    </div>
  );
}
