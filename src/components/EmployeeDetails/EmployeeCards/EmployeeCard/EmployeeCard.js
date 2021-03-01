import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const EmployeeCard = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.EmployeeCard}>
          <div className={classes.EmployeeCard__info}>
            <div className={classes.EmployeeCard__img}>
              <img src="" alt="" srcset="" />
            </div>
            <div className="">
              <Typography variant="h5">Shiva shankar</Typography>
              <Typography variant="body2">Javascript</Typography>
            </div>
          </div>
          <div className={classes.email}>
            <Typography variant="subtitle1">Email:Shiva1894300@gmail.com</Typography>
          </div>
          <div className={classes.phone}>
            <Typography variant="subtitle1">phone:123456790</Typography>
          </div>
          <div>
            <EditIcon />
            <DeleteIcon />
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EmployeeCard;
