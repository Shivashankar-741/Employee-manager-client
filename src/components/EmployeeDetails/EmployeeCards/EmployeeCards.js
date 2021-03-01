import { Grid } from "@material-ui/core";
import React from "react";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import useStyles from "./styles";

const EmployeeCards = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.EmployeeCards} container alignItems="stretch" spacing={2}>
      <Grid item xs={12} sm={4}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <EmployeeCard />
      </Grid>
    </Grid>
  );
};

export default EmployeeCards;
