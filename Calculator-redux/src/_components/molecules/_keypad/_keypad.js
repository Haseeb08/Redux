import React from "react";
import Button from "../../atoms/_button/_button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  keyPad: {
    display: "flex",
    flexDirection: "column",
    margin: "7px",
  },

  keyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: "1",
    width: "100%",
  },
}));

function KeyPad() {
  const classes = useStyles();

  return (
    <div className={classes.keyPad}>
      <div className={classes.keyRow}>
        <Button value={"AC"} />
        <Button value={"<="} />
      </div>
      <div className={classes.keyRow}>
        <Button value={"9"} color={"primary"} />
        <Button value={"8"} color={"primary"} />
        <Button value={"7"} color={"primary"} />
        <Button value={"+"} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={"6"} color={"primary"} />
        <Button value={"5"} color={"primary"} />
        <Button value={"4"} color={"primary"} />
        <Button value={"-"} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={"3"} color={"primary"} />
        <Button value={"2"} color={"primary"} />
        <Button value={"1"} color={"primary"} />
        <Button value={"*"} color={"secondary"} />
      </div>
      <div className={classes.keyRow}>
        <Button value={"0"} color={"primary"} />
        <Button value={"."} color={"primary"} />
        <Button value={"="} />
        <Button value={"/"} color={"secondary"} />
      </div>
    </div>
  );
}
export default KeyPad;
