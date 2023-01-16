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
}));
