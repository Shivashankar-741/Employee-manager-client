import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ closeModal, currentId, SetCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const changeInput = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    let randomImg = Math.floor(Math.random() * 8 + 1);
    e.preventDefault();
    if (
      postData.name !== "" &&
      postData.jobTitle !== "" &&
      postData.email !== "" &&
      postData.phoneNumber !== ""
    ) {
      console.log(postData);

      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(
          createPost({
            ...postData,
            imageURL: `https://www.bootdey.com/img/Content/avatar/avatar${randomImg}.png`,
          })
        );
      }
      clear();
    }
  };

  const clear = () => {
    SetCurrentId(null);
    setPostData({
      name: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
    });
    closeModal();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Enter Employee Details</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={postData.name}
          onChange={changeInput}
        />
        <TextField
          name="jobTitle"
          variant="outlined"
          label="JobTitle"
          fullWidth
          value={postData.jobTitle}
          onChange={changeInput}
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          rows={4}
          value={postData.email}
          onChange={changeInput}
        />
        <TextField
          name="phoneNumber"
          variant="outlined"
          label="PhoneNumber"
          fullWidth
          value={postData.phoneNumber}
          onChange={changeInput}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
