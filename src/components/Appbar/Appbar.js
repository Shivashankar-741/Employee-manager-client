import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const Appbar = () => {
  const classes = useStyles();

  const theme = createMuiTheme();

  theme.typography.h6 = {
    fontSize: "1.4rem",
    "@media (max-width:600px)": {
      fontSize: "1.1rem",
    },
  };

  const ModalOpen = () => {
    console.log("model opened");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography className={classes.title} variant="h6">
              Employee Manager
            </Typography>
            <Typography className={classes.addEmployee} variant="subtitle1" onClick={ModalOpen}>
              Add Employee
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Appbar;
