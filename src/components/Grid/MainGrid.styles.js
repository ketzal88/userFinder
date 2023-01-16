import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  structure: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexDirection: "row",
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
