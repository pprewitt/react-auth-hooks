import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import UserContext from '../../src/utils/UserContext';

function SignInCard(){
  const { userData, handleInputChange, handleLogin } = useContext(UserContext);
    return( <div style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center", marginTop: "10%", opacity:"0.8"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '30rem' }}
        className="mb-2"
      >
        <Card.Header>Quik Code Pro</Card.Header>
        <Card.Body>
        <Card.Title>Sign In</Card.Title>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="username" className="inputGroup-sizing-sm" value={userData.username} onChange={handleInputChange} ></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Username" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="password" value={userData.password} onChange={handleInputChange}className="inputGroup-sizing-sm"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder ="Password"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
        <br />
        <Button onClick={handleLogin} className="info">Submit</Button>
        </Card.Body>
      </Card></div>)

}

export default SignInCard