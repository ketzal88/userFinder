import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: "50px",
  },
  iconGrid: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  cardMain: {
    width: "100%",
    borderRadius: 9,
    margin: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexDirection: "row",
  },
  searchWrapper: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    marginLeft: 0,
    width: "100%",
  },
  searchIconWrapper: {
    padding: 2,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBase: {
    paddingLeft: 30,
  },
  sortIcon: {
    color: "white",
  },
  sortText: {
    color: "white",
    fontStyle: "bold",
  },
}));
