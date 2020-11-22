import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function SigninNav(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"> <img src="https://img.icons8.com/color/48/000000/source-code.png"/>QC Pro</Navbar.Brand>
        <Navbar.Collapse className = "justify-content-end">
            <Nav>
        <Nav.Link href="/signin">Log In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default SigninNav