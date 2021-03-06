import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../actions/posts";

const EmployeeCard = ({ employee, SetCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.EmployeeCard}>
          <div className={classes.EmployeeCard__info}>
            <div className={classes.EmployeeCard__img}>
              <img
                className={classes.EmployeeCard__img__in}
                src={employee.imageURL}
                alt="employeeImage"
              />
            </div>
            <div className={classes.name}>
              <Typography variant="h5">{employee.name}</Typography>
              <Typography variant="body2">{employee.jobTitle}</Typography>
            </div>
          </div>
          <div className={classes.email}>
            <Typography variant="body1">Email:{employee.email}</Typography>
          </div>
          <div className={classes.phone}>
            <Typography variant="body1">phone:{employee.phoneNumber}</Typography>
          </div>
          <div className={classes.icons}>
            <EditIcon className={classes.editIcon} onClick={() => SetCurrentId(employee._id)} />
            <DeleteIcon
              className={classes.deleteIcon}
              onClick={() => dispatch(deletePost(employee._id))}
            />
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EmployeeCard;
