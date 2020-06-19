import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../atoms/_title/_title";
import Input from "../../atoms/_input/_input";
import KeyPad from "../../molecules/_keypad/_keypad";

const useStyles = makeStyles((theme) => ({
  calcWrapper: {
    width: "auto",
    height: "auto",
    border: "2px solid green",
    boxShadow: "10px 10px 10px grey",
    backgroundColor: "#000000",
  },
}));

function Calculator() {
  const classes = useStyles();

  return (
    <div className={classes.calcWrapper}>
      <Title title={"Calculator: redux"} />
      <hr style={{ margin: 0 }}></hr>
      <Input />
      <hr style={{ margin: 0 }}></hr>
      <KeyPad />
    </div>
  );
}

export default Calculator;
