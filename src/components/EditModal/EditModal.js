import React, { useState, useEffect } from "react";
import { useStyles } from "./EditModal.styles";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function EditModal({ open, handleOpen, user, setEditUser }) {
  const classes = useStyles();
  const initialValues = {
    fName: "Wayne",
    last: "Campbell",
    location: {
      city: "Cambridge",
      state: "Arkansas",
    },
    email: "wayne.campbell@example.com",
    phone: "(307) 885-3375",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const fName = user.name.first;
  const last = user.name.last;
  const city = user.location.city;
  const state = user.location.state;
  const email = user.email;
  const phone = user.phone;

  useEffect(() => {
    return () => {
      setFormValues({ ...user, fName, last, city, state, phone, email });
    };
  }, [city, email, fName, last, phone, state, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    formValues.name.first = formValues.fName;
    formValues.name.last = formValues.last;
    formValues.location.city = formValues.city;
    formValues.location.state = formValues.state;
    // formValues.phone = formValues.phone;
    // formValues.email = formValues.email;
    setEditUser({ ...formValues, user });
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit the user information
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
