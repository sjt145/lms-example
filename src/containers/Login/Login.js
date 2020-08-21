import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

import { Input, H1, PrimaryButton, SecondayButton, Loader } from '../../components';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { auth } from '../../store/actions/auth';
import loginFormValidate from '../../helper/loginFormValidate';

import useForm from '../../customHooks/useForm'

import './Login.css';

const Login = () => {

  const [isSignUp, setIsSignUp] = useState(false);

  const submitForm = () => {
    dispatch(auth({ email: values.userName, password: values.password }, false))
  }

  const { values, errors, handleInputChange, handleSubmit } = useForm(submitForm, loginFormValidate);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.authState.loading);
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

  return (
    <div className="login">

      {isAuthenticated && <Redirect to="/" />}

      {loading && <Loader />}

      <H1 text="Please Login" />
      <Input name="userName" text="User Name" value={values.userName} autoFocus={true} onChange={handleInputChange} />
      {errors.userName && <label>{errors.userName}</label>}
      <Input name="password" text="Password" value={values.password} onChange={handleInputChange} />
      {errors.password && <label>{errors.password}</label>}

      {/* <PrimaryButton text="Login" onClick={() => { setIsAuthenticated(true) }} /> */}
      {
        isSignUp ?
          <PrimaryButton text="Sign Up" onClick={() => { dispatch(auth({ email: values.userName, password: values.password }, true)) }} />
          :
          <PrimaryButton text="Login" onClick={handleSubmit} />
      }

      <SecondayButton text="Reset" />
      <br /><br />
      <PrimaryButton text="Switch Button" onClick={() => { setIsSignUp(!isSignUp) }} />

    </div>
  )
}

export default withErrorHandler(Login, axios)