import { Container, CssBaseline } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Appbar from "./components/Appbar/Appbar";
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails";
import useStyles from "./styles.js";

const App = () => {
  console.log(process.env.EMPLOYEE_MANAGER);
  const classes = useStyles();

  const dispatch = useDispatch();

  const [currentId, SetCurrentId] = useState(null);

  console.log(currentId);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
