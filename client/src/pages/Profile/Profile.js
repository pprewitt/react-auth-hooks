import React, { useState, useContext } from 'react';
import './Profile.scss';
import { Button, Container, Row, Col, Jumbotron, Form, InputGroup, InputGroupText, InputGroupAddon, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label, FormGroup, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
import AceModalUser from '../../components/codemodaluser'
import FollowModal from '../../components/followModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import AvatarOption from '../../components/avatarOp'
import FooterPage from '../../components/FooterPage'
import LogInBro from '../../components/loginbro'


const Avatars = [
  {
    "name": "Plant",
    "icon": faSeedling,
    "size": "7x"
  },
  {
    "name": "Frog",
    "icon": faFrog,
    "size": "7x"
  },
  {
    "name": "Wizard",
    "icon": faHatWizard,
    "size": "7x"
  },
  {
    "name": "Burger",
    "icon": faHamburger,
    "size": "7x"
  },
  {
    "name": "Guitar",
    "icon": faGuitar,
    "size": "7x"
  },
  {
    "name": "Ghost",
    "icon": faGhost,
    "size": "7x"
  },
  {
    "name": "Couch",
    "icon": faCouch,
    "size": "7x"
  },
  {
    "name": "Drumstick",
    "icon": faDrumstickBite,
    "size": "7x"
  },
  {
    "name": "Bird",
    "icon": faDove,
    "size": "7x"
  },
  {
    "name": "Bomb",
    "icon": faBomb,
    "size": "7x"
  },
  {
    "name": "Apple",
    "icon": faAppleAlt,
    "size": "7x"
  },
  {
    "name": "Injured Person",
    "icon": faUserInjured,
    "size": "7x"
  },
  {
    "name": "Ninja",
    "icon": faUserNinja,
    "size": "7x"
  },
  {
    "name": "Person",
    "icon": faUser,
    "size": "7x"
  },
  {
    "name": "Tie Person",
    "icon": faUserTie,
    "size": "7x"
  }, {
    "name": "Hippo",
    "icon": faHippo,
    "size": "7x"
  }, {
    "name": "Dog",
    "icon": faDog,
    "size": "7x"
  }, {
    "name": "Home Slice",
    "icon": faBreadSlice,
    "size": "7x"
  }, {
    "name": "Cat",
    "icon": faCat,
    "size": "7x"
  }
]
const example = [{ name: "example", snip: "<p>hello world</p>", sniptwo: "<h1>good night moon</h1>" }, { name: "example2" }]
const follow = [{ name: "Bob", skills: "none" }]

const Profile = () => {

  const [avatarState, setAvatar] = useState()

  function avatarInputChange(event) {
    const currentAvatar = event.target.value;
    Avatars.forEach(item => {
      if (currentAvatar === item.name) {
        setAvatar(item.icon)
      }
    })
    handleUserFormInput(event)
  };
  // lists for code snippets and users
  const [snipList, setSnipList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userSearchState, setUserSearchState] = useState({})
  const [userFormState, setUserFormState] = useState({})
  const [privateInputState, setPrivateInputState] = useState({})

  function handlePrivateInput(event) {
    const { name, value } = event.target;
    setPrivateInputState({ ...privateInputState, [name]: value })
  }

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserSearchState({ ...userSearchState, [name]: value })
    console.log(userSearchState)
  }

  const handleUserFormInput = (event) => {
    const { name, value } = event.target;
    setUserFormState({ ...userFormState, [name]: value })
    console.log(userFormState)
  }

  const privateSearchCode = () => { }
  const userSearch = () => { }
  const updateUser = () => { }



  const { user, loggedIn, logout } = useContext(UserContext);
 
  return (<>
    {loggedIn ? (<>

      <Container>
        <Row>
          <Col sm={12} md={3}>
            <Jumbotron style={{ marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7" }}>
              <h4>Private Code Search</h4>
              <FormGroup>
                
                <CustomInput type="select" id="exampleCustomSelect" onChange={handlePrivateInput} name="customSelect" >
                  <option value="">Select a Language</option>
                  <option>JavaScript</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>Mark Down</option>
                  <option>Handlebars</option>
                </CustomInput>
              </FormGroup>
              
              <br />
              <InputGroup size="sm" className="mb-3" onChange={handlePrivateInput}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="Keywords"></InputGroupText>
                </InputGroupAddon>
                <Input name="keywords" aria-label="Small" aria-describedby="Keywords" placeholder="KeyWords" />
              </InputGroup>
              <Button color="primary" onClick={privateSearchCode}>Search</Button>
              <br />
              {example.map(item => <><AceModalUser name={item.name} snip={item.snip} sniptwo={item.sniptwo} /><br /></>)}
            </Jumbotron>
          </Col>
          <Col sm={12} md={6}>
            <Jumbotron style={{ marginTop: "5%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: "0.7" }}>
              <FontAwesomeIcon icon={avatarState} size="7x"></FontAwesomeIcon>
              <br></br>
              <FormGroup>
                
              <CustomInput size="sm" type="select" name="avatar" onChange={avatarInputChange}>
            <option>Choose an Avatar</option>
            {Avatars.map(item =><AvatarOption name={item.name}></AvatarOption>)}
            </CustomInput>
            </FormGroup>
              <hr />
              <h2>Username:<span></span></h2>
              <textarea style={{ width: "80%" }} rows="7" name="bio" onChange={handleUserFormInput} placeholder="Write Your Bio Here"></textarea>
              <br />
              <Button primary="primary" onClick={updateUser}>Update</Button>
            </Jumbotron>

          </Col>
          <Col sm={12} md={3}>
            <Jumbotron style={{ marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7" }}>
              <h4>Follow a User</h4>
              <InputGroup size="sm" className="mb-3" onChange={handleUserInput}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="user-search"></InputGroupText>
                </InputGroupAddon>
                <Input aria-label="Small" aria-describedby="user-search" placeholder="User Search" name="search" />
              </InputGroup>
              <br />

              <Button color="primary" onClick={userSearch}>Search</Button>
              <br />
              {follow.map(item => <><FollowModal name={item.name} bio={item.skills} /> <br /></>)}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <br></br>
      <FooterPage />

    </>) : (
        <LogInBro />
      )}

  </>
  )
};

export default Profile;
