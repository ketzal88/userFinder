import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  cardMain: {
    height: "400px",
    width: "300px",
    borderRadius: 9,
    margin: "10px",
    backgroundColor: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    flexDirection: "row",
  },
  blueHeader: {
    height: "30%",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#416DFF",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "Roboto",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 15,
  },
  textContainer: {
    marginTop: "10px",
    textAlign: "center",
  },
  text: {
    color: "#444",
    fontSize: "14px",
    fontFamily: "Roboto",
    marginTop: "15px",
  },
  editIcon: {
    color: "#FFFFFF",
    justifyContent: "flex-start",
    margin: 10,
  },
  avatar: {
    width: "130px",
    border: "8px solid white",
    boxShadow: "2px 2px 2px 2px rgba(204,204,204,0.75)",
    borderRadius: 100,
  },
  avatarGrid: {
    marginTop: "-100px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  },
}));
