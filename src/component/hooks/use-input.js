import { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
const useInput = (validateValue, values) => {
  const [enteredValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };
  useEffect(() => {
    if (values) {
      unstable_batchedUpdates(() => {
        setEnterValue(values);
        setIsTouched(true);
      });
    }
  }, [values]);
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    unstable_batchedUpdates(() => {
      setEnterValue("");
      setIsTouched(false);
    });
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
