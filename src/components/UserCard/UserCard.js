import React from "react";
import { useStyles } from "./UserCard.styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function UserCard({ user, handleOpen, setEditUser }) {
  const classes = useStyles();

  return (
    <div className={classes.cardMain}>
      <div className={classes.blueHeader}>
        <ModeEditIcon
          className={classes.editIcon}
          onClick={() => (handleOpen(), setEditUser(user))}
        />
      </div>
      <div>
        <div className={classes.avatarGrid}>
          <div className={classes.userName}>
            {user.name.first} {user.name.last}
          </div>
          <img
            className={classes.avatar}
            alt={`${user.name.first} ${user.name.last}`}
            src={user.picture.medium}
          />
        </div>
        <div className={classes.textContainer}>
          <div className={classes.text}>{user.email}</div>
          <div className={classes.text}>{user.phone}</div>
          <div className={classes.text}>
            {user.location.city}, {user.location.state}
          </div>
        </div>
      </div>
    </div>
  );
}
