import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#333",
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginRight: "40px",
  },
}));
