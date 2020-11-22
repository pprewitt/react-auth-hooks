import React, { useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';

const Login = () => {
  const { userData, handleInputChange, handleLogin } = useContext(UserContext);
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: "center", marginTop: "10%",opacity:"0.8"}}> <Card
        bg="secondary"
        text='white'
        style={{ width: '30rem' }}
        className="mb-2 bg-secondary"
      >
       
        <CardBody>
      <h2 className="loginTitle text-white">Login</h2>
      <hr />
      <Form>
        <FormGroup>
          <Label for="username" className="text-white">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password" className="text-white">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={handleLogin} color="primary" block>
          Login
        </Button>
        <p className="signupLink">
          <Link className="text-white" to="/signup">dont have an account? Sign up here</Link>
        </p>
      </Form>
      </CardBody>
      </Card>
    </div>
  );
};

export default Login;
