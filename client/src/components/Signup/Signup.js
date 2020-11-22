import React, { useState, useEffect, useContext } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

const Signup = () => {
  const {
    userData,
    handleInputChange,
    handleSignup,
    failureMessage,
  } = useContext(UserContext);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validUserName, setValidUserName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    console.log(errorMessage);
  }, []);

  const handleConfirmPassword = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  // make sure firstname is at least 3 characters
  const checkFirstname = () => {
    const length = userData.firstname.length;
    if (length === 0) {
      setValidFirstName(false);
      setErrorMessage({ ...errorMessage, firstname: '' });
    } else if (length < 3) {
      setValidFirstName(false);
      setErrorMessage({
        ...errorMessage,
        firstname: 'First Name should be at least 3 characters.',
      });
    } else {
      setValidFirstName(true);
      setErrorMessage({ ...errorMessage, firstname: '' });
    }
  };

  // make sure firstname is at least 3 characters
  const checkLastname = () => {
    const length = userData.lastname.length;
    if (length === 0) {
      setValidLastName(false);
      setErrorMessage({ ...errorMessage, lastname: '' });
    } else if (length < 3) {
      setValidLastName(false);
      setErrorMessage({
        ...errorMessage,
        lastname: 'Last Name should be at least 3 characters.',
      });
    } else {
      setValidLastName(true);
      setErrorMessage({ ...errorMessage, lastname: '' });
    }
  };

  // uses regex to check is email is valid
  const checkEmail = () => {
    const validEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    const valid = validEmail.test(userData.email);
    const length = userData.email.length;
    if (length === 0) {
      setValidEmail(false);
      setErrorMessage({ ...errorMessage, email: '' });
    } else if (!valid) {
      setValidEmail(false);
      setErrorMessage({
        ...errorMessage,
        email: 'Please enter a valid email address.',
      });
    } else {
      setValidEmail(true);
      setErrorMessage({ ...errorMessage, email: '' });
    }
  };

  // make sure username is at least 5 characters
  const checkUsername = () => {
    const length = userData.username.length;
    if (length === 0) {
      setValidUserName(false);
      setErrorMessage({ ...errorMessage, username: '' });
    } else if (length < 5) {
      setValidUserName(false);
      setErrorMessage({
        ...errorMessage,
        username: 'Username should be at least 5 characters.',
      });
    } else {
      setValidUserName(true);
      setErrorMessage({ ...errorMessage, username: '' });
    }
  };

  // checks is password meets regex test (at least 8 letters, 1 capital and 1 number)
  const checkPassword = () => {
    const strongPassword = new RegExp(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    );
    const valid = strongPassword.test(userData.password);
    const length = userData.password.length;
    if (length === 0) {
      setValidPassword(false);
      setErrorMessage({ ...errorMessage, password: '' });
    } else if (!valid) {
      setValidPassword(false);
      setErrorMessage({
        ...errorMessage,
        password: 'Password should be at least 8 letters, 1 capital & 1 number',
      });
    } else {
      setValidPassword(true);
      setErrorMessage({ ...errorMessage, password: '' });
    }
  };

  // checks if 2 password fields match
  const checkConfirmPassword = () => {
    if (confirmPassword.length === 0) {
      setIsConfirmed(false);
      setErrorMessage({ ...errorMessage, confirmPassword: '' });
    } else if (
      userData.password !== '' &&
      userData.password === confirmPassword
    ) {
      setIsConfirmed(true);
      setErrorMessage({ ...errorMessage, confirmPassword: '' });
    } else {
      setIsConfirmed(false);
      setErrorMessage({
        ...errorMessage,
        confirmPassword: 'Passwords must match',
      });
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center", marginTop: "10%",opacity:"0.8"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '30rem' }}
        className="mb-2 bg-secondary"
      >
       
        <CardBody>

        <CardTitle className= "text-white">Sign up</CardTitle>
      {failureMessage ? <Alert type="danger">{failureMessage}</Alert> : <p></p>}
      <Form>
        <FormGroup>
          
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="first name"
            value={userData.firstname}
            onChange={handleInputChange}
            onBlur={checkFirstname}
            valid={validFirstName}
          />
          <FormText>{errorMessage['firstname']}</FormText>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="last name"
            value={userData.lastname}
            onChange={handleInputChange}
            onBlur={checkLastname}
            valid={validLastName}
          />
          <FormText>{errorMessage['lastname']}</FormText>
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            value={userData.email}
            onChange={handleInputChange}
            onBlur={checkEmail}
            valid={validEmail}
          />
          <FormText>{errorMessage['email']}</FormText>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={userData.username}
            onChange={handleInputChange}
            onBlur={checkUsername}
            valid={validUserName}
          />
          <FormText>{errorMessage['username']}</FormText>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
            onBlur={checkPassword}
            valid={validPassword}
          />
          <FormText>{errorMessage['password']}</FormText>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            onKeyUp={checkConfirmPassword}
            valid={isConfirmed}
          />
          <FormText>{errorMessage['confirmPassword']}</FormText>
        </FormGroup>
        {/* if all fields are valid, allow the user to submit the form */}
        {validFirstName &&
        validLastName &&
        validEmail &&
        validUserName &&
        validPassword &&
        isConfirmed ? (
          <Button onClick={handleSignup} color="success" block>
            Signup
          </Button>
        ) : (
          <Button className = "text-white" onClick={handleSignup} color="primary" block disabled>
            Signup
          </Button>
        )}
        <p className="signupLink text-white">
          <Link className="text-white" to="/login">already have an account? Sign in here</Link>
        </p>
      </Form>
      </CardBody>
      </Card>
    </div>
  );
};

export default Signup;
