import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  form: {
    height: "auto",
    width: "300px",
    backgroundColor: "rgba(255,255,255,0.13)",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(8,7,16,0.6)",
    padding: "50px 35px",
  },
  "form *": {
    fontFamily: "'Poppins',sans-serif",
    color: "#ffffff",
    letterSpacing: "0.5px",
    outline: "none",
    border: "none",
  },
  "form h3": {
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "42px",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginTop: "30px",
    fontSize: "16px",
    fontWeight: 500,
  },
  input: {
    display: "block",
    height: "50px",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: "3px",
    padding: "0 10px",
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: 300,
  },

  button: {
    marginTop: "50px",
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#080710",
    padding: "15px 0",
    fontSize: "18px",
    fontWeight: 600,
    borderRadius: "5px",
    cursor: "pointer",
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes[".background"]}>
        <div className={classes[" .shape .shape:first-child "]}></div>
        <div className={classes[" .shape .shape:last -child "]}></div>
      </div>
      <form className={classes.form}>
        <h3 className={classes[".form .h3"]}>Login Here</h3>
        <label className={classes.label} htmlFor="username">
          Username
        </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Email or Phone"
          id="username"
        />
        <label className={classes.label} htmlFor="password">
          Password
        </label>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className={classes.button}>Log In</button>
      </form>
    </>
  );
};

export default Form;
