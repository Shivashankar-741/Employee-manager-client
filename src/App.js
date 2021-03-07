import { Container, CssBaseline } from "@material-ui/core";
import React, { useState } from "react";
import Appbar from "./components/Appbar/Appbar";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();

  const [currentId, SetCurrentId] = useState(null);

  return (
    <div className="App">
      <CssBaseline />
      <Appbar currentId={currentId} SetCurrentId={SetCurrentId} />
      <Container maxWidth="xl" className={classes.cardsContainer}>
        <EmployeeDetails SetCurrentId={SetCurrentId} />
      </Container>
    </div>
  );
};

export default App;
