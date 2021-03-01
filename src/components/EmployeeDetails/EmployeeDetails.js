import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";
import EmployeeCards from "./EmployeeCards/EmployeeCards";
import useStyles from "./styles";

const EmployeeDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardsRoot}>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} className={classes.gridOne}>
              <EmployeeCards />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default EmployeeDetails;
