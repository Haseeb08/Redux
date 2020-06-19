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

function reducer(state, action) {
  switch (action.type) {
    case "CLEAR":
      var value = [...state];
      value = "";
      return value;

    case "REMOVE":
      var str = state;
      var val = str.substring(0, str.length - 1);
      return val;

    case "ANS":
      try {
        var ans = eval(state);
      } catch (err) {
        var ans = "error";
      }

      return ans;

    case "ADD":
      var val = state + action.value;
      return val;

    default:
      return state;
  }
}

function Calculator() {
  const classes = useStyles();
  // const [inputValue, setInputValue] = useState("");
  const [inputValue, dispatch] = useReducer(reducer, "");

  const handleClick = (value) => {
    console.log("Value :", value);
    console.log("Input value:", inputValue);

    switch (value) {
      case "AC":
        dispatch({ type: "CLEAR" });
        //setInputValue("");
        break;
      case "<=":
        dispatch({ type: "REMOVE" });
        // setInputValue(val);
        break;
      case "=":
        dispatch({ type: "ANS" });
        // setInputValue(ans+"");
        break;
      default:
        dispatch({ type: "ADD", value });
        // setInputValue(inputValue + value);
        break;
    }
  };

  return (
    <div className={classes.calcWrapper}>
      <Title title={"MUI Calculator"} />
      <hr style={{ margin: 0 }}></hr>
      <Input input={inputValue} />
      <hr style={{ margin: 0 }}></hr>
      <KeyPad handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
