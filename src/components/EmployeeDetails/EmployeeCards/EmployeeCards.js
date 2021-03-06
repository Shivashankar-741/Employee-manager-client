import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import useStyles from "./styles";

const EmployeeCards = ({ SetCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();
  return (
    <Grid className={classes.EmployeeCards} container spacing={2}>
      {posts.map((el, idx) => (
        <Grid item key={idx.toString()} xs={12} sm={6} md={4}>
          <EmployeeCard employee={el} SetCurrentId={SetCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeCards;
