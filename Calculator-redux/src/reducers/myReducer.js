const CalculatorReducer = (state = "", action) => {
  switch (action.type) {
    case "AC":
      var value = [...state];
      value = "";
      return value;

    case "<=":
      var str = state;
      var val = str.substring(0, str.length - 1);
      return val;

    case "=":
      try {
        var ans = eval(state);
      } catch (err) {
        var ans = "error";
      }

      return ans + "";

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "1":
    case "+":
    case "-":
    case "*":
    case "/":
      var val = state + action.value;
      return val;

    default:
      return state;
  }
};
export default CalculatorReducer;
