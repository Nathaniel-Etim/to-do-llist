import { useState } from "react";

const useValidation = (userInput) => {
  const [input, setInputFn] = useState(``);
  const [isTouched, setIsTouched] = useState(false);

  const hasError = userInput(input);

  const inputIsValid = !hasError && isTouched;

  const onChangInputHandelerFn = (Event) => {
    setInputFn(Event.target.value);
  };

  const onBlurFn = () => {
    setIsTouched(true);
  };

  const clearInputFn = () => {
    setInputFn(``);
    setIsTouched(false);
  };

  return {
    input,
    isTouched,
    hasError,
    inputIsValid,
    onChangInputHandelerFn,
    onBlurFn,
    clearInputFn,
  };
};

export default useValidation;
