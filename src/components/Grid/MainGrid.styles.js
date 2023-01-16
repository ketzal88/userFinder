import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  structure: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    maxWidth: "80%",
  },
  titleHeader: {
    marginTop: "80px",
    marginBottom: "80px",
    fontSize: "48px",
    color: "white",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "Roboto",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 15,
    textDecoration: "none",
  },
}));
