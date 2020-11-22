import React, { useContext, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import UserContext from '../utils/UserContext'


function TheNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, logout } = useContext(UserContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar  bg="dark" variant="dark"   >
        <Navbar.Brand href="/"><img src="https://img.icons8.com/color/48/000000/source-code.png"/>QC Pro</Navbar.Brand>

      <Navbar.Collapse className = "justify-content-end">
        <Nav.Link href="/">Feed</Nav.Link>


        <Nav.Link href="/profile">Profile</Nav.Link>

        <Nav.Link href="/newSnip">New Snip</Nav.Link>

        <Nav.Link onClick={logout}>Logout</Nav.Link>


        <Nav.Link href="/login">Login</Nav.Link>

        <Nav.Link href="/signup">Signup</Nav.Link>
        </Navbar.Collapse>



      </Navbar>
    </div>
  )
}
export default TheNav