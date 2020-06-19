import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { myTheme } from "../../../theme";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  input: {
    height: "2.1em",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "1.4em",
    backgroundColor: "#000000",
    paddingRight: "10px",
    color: myTheme.palette.text.primary,
  },
}));

function Input() {
  const classes = useStyles();
  const inputValue = useSelector((state) => state);

  return <div className={classes.input}>{inputValue}</div>;
}
export default Input;
