import React, { useState } from "react";
import { useStyles } from "./EditModal.styles";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import parserData from "../../utils/parser";

const initialValues = {
  fName: "Wayne",
  last: "Campbell",
  city: "Cambridge",
  state: "Arkansas",
  email: "wayne.campbell@example.com",
  phone: "(307) 885-3375",
};

export default function EditModal({ open, handleOpen, user, users, setUsers }) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState(
    parserData(user, true) || initialValues
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const editedUser = parserData(formValues, false);
    const usersCopy = [...users];
    const newUsers = usersCopy.map((item) => {
      if (item?.id?.value?.includes(editedUser.id)) {
        item = { ...item, ...editedUser };
      }
      return item;
    });
    setUsers(newUsers);
    handleOpen();
  };

  return (
    <Modal
      open={open}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.mainBox}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit the user information
          </Typography>
          <TextField
            variant="standard"
            id="fName"
            name="fName"
            type="text"
            className={classes.field}
            value={formValues.fName}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            id="last"
            name="last"
            type="text"
            className={classes.field}
            value={formValues.last}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            className={classes.field}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            id="phone"
            name="phone"
            type="text"
            className={classes.field}
            value={formValues.phone}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            id="city"
            name="city"
            type="text"
            className={classes.field}
            value={formValues.city}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            id="state"
            name="state"
            type="text"
            className={classes.field}
            value={formValues.state}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
              margin: "5px",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
