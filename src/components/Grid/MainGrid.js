import React, { useEffect, useState, useMemo } from "react";
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
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState("");
  // const [sortedCity, setSortedCity] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    async function fetchData() {
      const response = await loadData(paramsData);
      setUsers([...users, ...response.results]);
    }
    fetchData();
  }, [paramsData]);

  const loadMore = () => {
    setParamsData((prevState) => ({
      page: prevState.page + 1,
    }));
    loadData(paramsData);
  };

  let filteredList = useMemo(() => {
    if (!search) return users;

    return users.filter((item) =>
      item.name.first.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, users]);

  filteredList = useMemo(() => {
    switch (sorted) {
      case "name":
        return filteredList.sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        );
      case "city":
        return filteredList.sort((a, b) =>
          a.location.city.localeCompare(b.location.city)
        );
      case "email":
        return filteredList.sort((a, b) => a.email.localeCompare(b.email));
      default:
        return filteredList;
    }
  }, [sorted, filteredList]);

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
        <SearchBar
          setSorted={setSorted}
          // setSortedCity={setSortedCity}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className={classes.grid}>
        {filteredList.length ? (
          filteredList?.map((user, index) => (
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
                setSearch("");
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
