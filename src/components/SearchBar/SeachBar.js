import React from "react";
import { useStyles } from "./SearchBar.styles";
import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

export default function SearchBar({ handleSearchInput, sortByName }) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <div className={classes.cardMain}>
        <div className={classes.searchWrapper}>
          <div className={classes.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={handleSearchInput}
            className={classes.inputBase}
            placeholder="Search by first name…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <Button onClick={sortByName}>
        <SortByAlphaIcon className={classes.sortIcon} fontSize={"large"} />
      </Button>
    </div>
  );
}
