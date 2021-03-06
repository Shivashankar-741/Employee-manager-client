import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import useStyles from "./styles";

const EmployeeCards = ({ SetCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  // console.log(posts);

  const classes = useStyles();
  return (
    <Grid className={classes.EmployeeCards} container alignItems="stretch" spacing={2}>
      {posts.map((el, idx) => (
        <Grid item key={idx.toString()} xs={12} sm={4}>
          <EmployeeCard employee={el} SetCurrentId={SetCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeCards;
