import React, { Fragment, useState } from "react";
import classes from "./Form.module.css";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    validity: nameValidity,
    inputHandler: nameInputHandler,
    blurHandler: nameBlurHandler,
    isValid: nameIsValid,
    value: name,
  } = useInput((value) => value.trim() !== "");

  const {
    validity: mailValidity,
    inputHandler: mailInputHandler,
    blurHandler: mailBlurHandler,
    isValid: mailIsValid,
    value: mail,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  const {
    validity: passwordValidity,
    inputHandler: passwordInputHandler,
    blurHandler: passwordBlurHandler,
    isValid: passwordIsValid,
    value: password,
  } = useInput((value) => value.trim().length >= 6);

  const {
    validity: cpasswordValidity,
    inputHandler: cpasswordInputHandler,
    blurHandler: cpasswordBlurHandler,
    isValid: cpasswordIsValid,
    value: cpassword,
  } = useInput((value) => value.trim().length >= 6 );

  let formIsValid = nameIsValid && mailIsValid;
  const nameInputClass = nameValidity ? classes.invalid : classes.valid;
  const mailInputClass = mailValidity ? classes.invalid : classes.valid;
  const passwordInputClass = passwordValidity ? classes.invalid : classes.valid; 
  const cpasswordInputClass = cpasswordValidity ? classes.invalid : classes.valid;

  const nav = useNavigate(); 

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== cpassword) {
        alert("Password and confirm password doesn't match"); 
        return;
    }
    const data = {
        name, mail, password
    }
    let previousData = JSON.parse(localStorage.getItem("data"));
    console.log(previousData); 
    localStorage.setItem("data", JSON.stringify([...previousData,data]))
    nav('/data');
  };
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <h2>Form</h2>
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="name">Name</label> <br />
            <input
              className={nameInputClass}
              type="text"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={nameInputHandler}
              onBlur={nameBlurHandler}
            />
            {nameValidity && (
              <p className={classes.errorText}>Please enter a valid name</p>
            )}
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <br />
            <input
              type="mail"
              id="mail"
              placeholder="Enter Mail"
              className={mailInputClass}
              value={mail}
              onChange={mailInputHandler}
              onBlur={mailBlurHandler}
            />
            {mailValidity && (
              <p className={classes.errorText}>Please Enter a valid Email</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className={passwordInputClass}
              value={password}
              onChange={passwordInputHandler}
              onBlur={passwordBlurHandler}
            />
          </div>
          <div>
            <label htmlFor="cpassword">Password</label>
            <br />
            <input
              type="password"
              id="cpassword"
              placeholder="Confirm Password"
              className={cpasswordInputClass}
              value={cpassword}
              onChange={cpasswordInputHandler}
              onBlur={cpasswordBlurHandler}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button
              disabled={!formIsValid}
              type="submit"
              className={classes.formButton}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
