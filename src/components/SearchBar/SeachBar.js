import React from "react";
import { useStyles } from "./SearchBar.styles";
import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GiteIcon from "@mui/icons-material/Gite";
import EmailIcon from "@mui/icons-material/Email";

export default function SearchBar({ sortByFunc, search, setSearch }) {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <div className={classes.cardMain}>
        <div className={classes.searchWrapper}>
          <div className={classes.searchIconWrapper}>
            <SearchIcon />
          </div>
          <InputBase
            className={classes.inputBase}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by first name…"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <div className={classes.iconGrid}>
        <p className={classes.sortText}>Sort by: </p>
        <Button onClick={() => sortByFunc("name")}>
          <SortByAlphaIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
        <Button onClick={() => sortByFunc("city")}>
          <LocationCityIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
        <Button onClick={() => sortByFunc("state")}>
          <GiteIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
        <Button onClick={() => sortByFunc("email")}>
          <EmailIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
      </div>
    </div>
  );
}
