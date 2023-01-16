import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20%",
    height: "50%",
    backgroundColor: "#fff",
    padding: 40,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 10,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexDirection: "column",
    gap: 10,
  },
  field: {
    marginTop: "20px",
  },
}));
