import React, {useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Avatars from '../avatars.json';
import AvatarOption from '../components/avatarOp';
import UserContext from '../utils/UserContext';



function SignUpCard(){
  const { userData, handleInputChange, handleSignup, failureMessage,} = useContext(UserContext);
  const [ validEmail, setValidEmail ] = useState(false);
  const [ validUsername, setValidUsername ] = useState(false);
  const [ isConfirmed, setIsConfirmed ] = useState(false);
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState({});

  
  useEffect(() => {
    console.log(errorMessage);
  }, []);

  const handleConfirmPassword = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };


//validate email with RegEx
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
    setValidUsername(false);
    setErrorMessage({ ...errorMessage, username: '' });
  } else if (length < 5) {
    setValidUsername(false);
    setErrorMessage({
      ...errorMessage,
      username: 'Username should be at least 5 characters.',
    });
  } else {
    setValidUsername(true);
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
    setConfirmPassword(false);
    setErrorMessage({ ...errorMessage, password: '' });
  } else if (!valid) {
    setConfirmPassword(false);
    setErrorMessage({
      ...errorMessage,
      password: 'Password should be at least 8 letters, 1 capital & 1 number',
    });
  } else {
    setConfirmPassword(true);
    setErrorMessage({ ...errorMessage, password: '' });
  }
};

    return( <div style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center", marginTop: "10%",opacity:"0.8"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '30rem' }}
        className="mb-2"
      >
        <Card.Header>Quik Code Pro</Card.Header>
        <Card.Body>
        <Card.Title>Sign up</Card.Title>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="username" value={userData.username}
            onChange={handleInputChange}
            onBlur={checkUsername}
            valid={validUsername} className="inputGroup-sizing-sm"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Username" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="email" value={userData.email}
            onChange={handleInputChange}
            onBlur={checkEmail}
            valid={validEmail} className="inputGroup-sizing-sm"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="email@email.com" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="password" value={userData.password}
            onChange={handleConfirmPassword}
            onBlur={checkPassword}
            valid={confirmPassword} className="inputGroup-sizing-sm"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Password"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
        <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choose an Avatar</Form.Label>
    <Form.Control as="select">
    {Avatars.map((item)=>(<AvatarOption name={item.name}/>))}
    </Form.Control>
  </Form.Group>
        <Button className="info" onClick={handleSignup}>Submit</Button>
        </Card.Body>
      </Card></div>)

}

export default SignUpCard;