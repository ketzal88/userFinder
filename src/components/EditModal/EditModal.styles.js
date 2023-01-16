import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    backgroundColor: "#fff",
    padding: 40,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "300px",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  field: {
    marginTop: "20px",
  },
}));
