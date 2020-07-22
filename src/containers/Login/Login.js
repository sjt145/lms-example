import React, { useState } from 'react';
import { Input, H1, PrimaryButton, SecondayButton, Formerrors } from '../../components';

import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [formErrors, setFormerrors] = useState(
    { email: '', password: '' }
  )
  const [emailvalid, setemailvalid] = useState(false)
  const [passwordvalid, setpasswordvalid] = useState(false)
  const [formvalid, setformvalid] = useState(false)
  const handleusername = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setemail(value)
    localStorage.setItem('username',value)
    validateField(name, value)
  }
  const handlepassword = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setpassword(value)
    validateField(name, value)
  }
  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let emailValid = emailvalid;
    let passwordValid = passwordvalid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    setFormerrors(fieldValidationErrors)
    setemailvalid(emailValid)
    setpasswordvalid(passwordValid)
    validateForm()
  }
  const validateForm = () => {
    setformvalid(emailvalid && passwordvalid)
  }
  const errorClass = (error) => {
    return (error.length === 0 ? '' : 'has-error');
  }

  return (
    <div className="login">
      <form>
        <H1 text="Please Login" />
        <div className={`form-group ${errorClass(formErrors.email)}`}>
          <Input required={true} type="email" name="email" value={username} text="User Name" autoFocus={true} onChange={(val) => handleusername(val)} />
        </div>
        <div className={`form-group ${errorClass(formErrors.password)}`}>
          <Input required={true} type="password" name="password" value={password} text="Password" onChange={(val) => handlepassword(val)} />
        </div>
        <PrimaryButton text="Login" type='submit' disabled={!formvalid}/>
        <SecondayButton text="Reset" />
        <Formerrors formErrors={formErrors} />
      </form>
    </div>
  )
}

export default Login