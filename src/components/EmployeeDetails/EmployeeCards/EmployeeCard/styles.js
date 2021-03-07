import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  EmployeeCard: {
    margin: "10px 15px",
    padding: "10px 20px",
    width: "300px",
  },

  EmployeeCard__img: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },

  EmployeeCard__img__in: {
    width: "250px",
  },

  name: {
    marginTop: "5px",
  },
  email: {
    marginTop: "5px",
  },
  phone: {
    marginTop: "5px",
  },
  icons: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "flex-end",
  },

  editIcon: {
    marginRight: "10px",
    cursor: "pointer",
  },

  deleteIcon: {
    cursor: "pointer",
  },
}));
