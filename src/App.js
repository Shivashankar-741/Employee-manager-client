import { Container, CssBaseline } from "@material-ui/core";
import React from "react";
import Appbar from "./components/Appbar/Appbar";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Appbar />
      <Container maxWidth="xl" className={classes.cardsContainer}>
        <EmployeeDetails />
      </Container>
    </div>
  );
};

export default App;
