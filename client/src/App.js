import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import NoMatch from './pages/NoMatch';
import TopNav from './components/TopNav';
import { Container } from 'reactstrap';
import UserContext from './utils/UserContext';

function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
  });
  const [loggedIn, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      userName: userData.userName,
      password: userData.password,
    };
    if (userData.userName && userData.password) {
      API.login(data)
        .then((user) => {
          console.log('App -> user', user);
          // if (user.data.loggedIn) {
          //   setLoggedin(true);
          //   setUser(user.data.user);

          //   console.log('log in successful');
          //   window.location.href = '/profile';
          // } else {
          //   console.log('Something went wrong :(');
          //   console.log(user);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    try {
      const data = {
        firstname: userData.firstName,
        lastname: userData.lastName,
        email: userData.email,
        username: userData.userName,
        password: userData.password,
      };

      if (userData.userName && userData.password) {
        API.signup(data)
          .then((user) => {
            console.log('App -> user', user);
            if (user.data.loggedIn) {
              if (user.data.loggedIn) {
                setLoggedin(true);
                setUser(user.data.user);
                console.log('log in successful');
                window.location.href = '/profile';
              } else {
                console.log('something went wrong :(');
                console.log(user.data);
                setFailureMessage(user.data);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log('App -> error', error);
    }
  };

  const isLoggedIn = () => {
    if (!loggedIn) {
      API.isLoggedIn().then((user) => {
        if (user.data.loggedIn) {
          setLoggedin(true);
          setUser(user.data.user);
        } else {
          console.log(user.data.message);
        }
      });
    }
  };

  const logout = () => {
    if (loggedIn) {
      API.logout().then(() => {
        console.log('logged out successfully');
        setLoggedin(false);
        setUser(null);
      });
    }
  };

  const contextValue = {
    userData,
    loggedIn,
    user,
    failureMessage,
    handleInputChange,
    handleLogin,
    handleSignup,
    logout,
  };
  return (
    <UserContext.Provider value={contextValue}>
      <Router>
        <div>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" render={Home} />
              <Route
                exact
                path="/login"
                render={() => <Auth action="login" />}
              />
              <Route
                exact
                path="/signup"
                render={() => <Auth action="signup" />}
              />
              <Route exact path="/profile" render={Profile} />
              <Route render={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
