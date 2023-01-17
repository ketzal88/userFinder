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
  const [sorted, setSorted] = useState(false);
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
    setParamsData(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true,
      }),
      loadData(paramsData)
    );
  };

  let filteredList = useMemo(() => {
    if (!search) return users;

    return users.filter((item) =>
      item.name.first.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, users]);

  filteredList = useMemo(() => {
    if (!sorted) return filteredList;

    return filteredList.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
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
