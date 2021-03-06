import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import EmployeeCards from "./EmployeeCards/EmployeeCards";
import useStyles from "./styles";

const EmployeeDetails = ({ SetCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={classes.cardsRoot}>
      <Grow in>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} className={classes.gridOne}>
              <EmployeeCards SetCurrentId={SetCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default EmployeeDetails;
