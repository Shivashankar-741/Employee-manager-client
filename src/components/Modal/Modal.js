import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "./styles";
import Form from "../Form/Form";

const TransitionsModal = ({ currentId, SetCurrentId }) => {
  console.log(currentId);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // if (currentId) {
  //   setOpen(true);
  // }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Employee
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Form
              openModal={handleOpen}
              closeModal={handleClose}
              currentId={currentId}
              SetCurrentId={SetCurrentId}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
