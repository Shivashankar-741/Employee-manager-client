import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[10],
    width: "600px",
    height: "300px",
    borderRadius: "5px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  addEmployee: {
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
}));
