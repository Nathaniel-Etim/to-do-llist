import React, { useState } from "react";
import { savePost } from "../api/api";
import useValidation from "../UI/InputValidation";
import classes from "./addWish.module.css";

const AddWish = () => {
  const Valid = (value) => value.trim() !== ``;

  const [submitting, setIsSubmitting] = useState(false);

  const {
    input: titleInput,
    hasError: titleHasNoError,
    inputIsValid: titleInputIsValid,
    onChangInputHandelerFn: onChangetitleInputHandelerFn,
    onBlurFn: onBlurTitleFn,
    clearInputFn: clearTitleInputField,
  } = useValidation(Valid);

  const {
    input: inputPost,
    // isTouched: postFormIsTouched,
    hasError: postFormHasNoError,
    inputIsValid: postInputIsValid,
    onChangInputHandelerFn: postOnChangeHandelerFn,
    onBlurFn: postOnBlurFn,
    clearInputFn: clearPostInput,
  } = useValidation(Valid);

  const formHasNoError = titleHasNoError && postFormHasNoError;

  const onSubmitHandelerFn = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formHasNoError) {
      setIsSubmitting(false);
      return;
    }

    const userInput = {
      userName: titleInput,
      post: inputPost,
    };

    savePost(userInput);
    clearPostInput();
    clearTitleInputField();

    setIsSubmitting(false);
  };

  const buttons = classes.actions + " btn";
  const Titleerror = titleInputIsValid ? classes.error : "";
  const posterror = postInputIsValid ? classes.error : "";

  return (
    <>
      <form className={classes.form} onSubmit={onSubmitHandelerFn}>
        <fieldset className={classes.control}>
          <label htmlFor="Name"> Name </label>
          <input
            id="Name"
            type="text"
            placeholder={`${
              titleInputIsValid ? `Name can't be left empty ` : ``
            }`}
            className={Titleerror}
            required
            minLength={1}
            value={titleInput}
            onBlur={onBlurTitleFn}
            onChange={onChangetitleInputHandelerFn}
          />
        </fieldset>
        <fieldset className={classes.control}>
          <label htmlFor="text">Post Text</label>
          <textarea
            id="text"
            name="post-text"
            required
            placeholder={
              postInputIsValid ? `this field can't be left empty` : ``
            }
            className={posterror}
            minLength={10}
            rows={5}
            value={inputPost}
            onBlur={postOnBlurFn}
            onChange={postOnChangeHandelerFn}
          ></textarea>
        </fieldset>
        <div className={classes.btnContainer}>
          <button type="button" disabled={submitting} className="btn">
            Cancel
          </button>
          <button className={buttons} disabled={submitting}>
            {submitting ? "Submitting..." : "Create Post"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddWish;
