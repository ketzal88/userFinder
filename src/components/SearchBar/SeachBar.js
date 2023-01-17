import React from "react";
import { useStyles } from "./SearchBar.styles";
import { InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";

export default function SearchBar({ setSorted, search, setSearch }) {
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
        <Button onClick={() => setSorted("name")}>
          <SortByAlphaIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
        <Button onClick={() => setSorted("city")}>
          <LocationCityIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
        <Button onClick={() => setSorted("email")}>
          <MailIcon className={classes.sortIcon} fontSize={"large"} />
        </Button>
      </div>
    </div>
  );
}
