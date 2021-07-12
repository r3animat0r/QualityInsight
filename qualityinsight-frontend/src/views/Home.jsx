import "./Home.css";
import React from "react";
import { useHistory } from "react-router-dom";

import Textfield from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
/* import SearchBar from '../components/SearchBar'; */

import Information from "../components/Information";

export default function Home() {
  let searchValue;
  let history = useHistory();

  return (
    <div id="home">
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
      <Information />
    </div>
  );
}
