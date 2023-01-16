import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useStyles } from "./MainGrid.styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import GitHubIcon from "@mui/icons-material/GitHub";
import UserCard from "../UserCard/UserCard";
import SearchBar from "../SearchBar/SeachBar";
import EditModal from "../EditModal/EditModal";
import loadData from "../../services/api";

export default function MainGrid() {
  const classes = useStyles();
  const [paramsData, setParamsData] = useState({
    per: 9,
    page: 1,
    total_pages: null,
  });
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    loadData(users, setUsers, paramsData);
  }, []);

  const loadMore = () => {
    setParamsData(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true,
      }),
      loadData()
    );
  };

  const handleSearchInput = (e) => {
    const serchResult = users.filter((item) =>
      item.name.first.toLowerCase().includes(e.target.value)
    );
    setUsers(serchResult);
  };

  const sortBy = useCallback(
    (param) => {
      // let sortBy;
      // if (param === "name") sortBy = "name.first";
      // if (param === "city") sortBy = "location.city";
      // if (param === "state") sortBy = "location.state";
      // if (param === "email") sortBy = "email";

      const sortedUsers = users.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      setUsers(sortedUsers);
    },
    [users]
  );

  // useEffect(() => {
  //   const sortBy = param => {
  //       let sortBy;
  //       if (param === "name") sortBy = "name.first";
  //       if (param === "city") sortBy = "location.city";
  //       if (param === "state") sortBy = "location.state";
  //       if (param === "email") sortBy = "email";

  //       const sortedUsers = [...users].sort((a, b) =>
  //       b.sortBy - a.sortBy);
  //       setUsers(sortedUsers);

  // const sortArray = type => {
  //   const types = {
  //     albums: 'albums',
  //     members: 'members',
  //     formed: 'formed_in',
  //   };
  //   const sortProperty = types[type];
  //   const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //   setData(sorted);
  // };

  // sortArray(sortType);
  // }, [sortBy]);

  return (
    <div className={classes.structure}>
      {open && (
        <EditModal
          open={open}
          handleOpen={handleOpen}
          user={editUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      <div className={classes.grid}>
        <h1 className={classes.titleHeader}>User DataBase</h1>
      </div>
      <div className={classes.grid}>
        <SearchBar handleSearchInput={handleSearchInput} sortBy={sortBy} />
      </div>
      <div className={classes.grid}>
        {users.length ? (
          users?.map((user, index) => (
            <UserCard
              user={user}
              key={index}
              handleOpen={handleOpen}
              setEditUser={setEditUser}
            />
          ))
        ) : (
          <div className={classes.grid}>
            <Button
              variant="contained"
              onClick={() => {
                loadData();
              }}
              startIcon={<RefreshIcon />}
              sx={{ margin: 10, width: "50%", height: "80px" }}
            >
              No data available
            </Button>
          </div>
        )}
      </div>
      {users.length && (
        <div className={classes.grid}>
          <Button
            variant="contained"
            onClick={() => {
              loadMore();
            }}
            startIcon={<RefreshIcon />}
            sx={{ margin: 10, width: "50%", height: "80px" }}
          >
            Load one more user
          </Button>
        </div>
      )}
      <div className={classes.grid}>
        <p className={classes.userName}>
          Built by -
          <a
            href="https://github.com/ketzal88"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> - Gabriel Uccello
          </a>
        </p>
      </div>
    </div>
  );
}
