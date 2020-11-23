import React, { useState, useContext } from 'react';
import UserContext from '../utils/UserContext'
import LogInBro from '../components/loginbro'
import AceModalGlobal from '../components/codemodalglobal'
import Posts from '../components/posts'
import { Container, Row, Col, Jumbotron, Form, Button, FormGroup, Label, CustomInput } from 'reactstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
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
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import FooterPage from '../components/FooterPage'

const Home = () => {
  const { user, loggedIn, logout } = useContext(UserContext);
  

  const globalexample = [{ name: "example 1", author: "Bob", language: "Html", snip: "<p>Hello World</p>", note: "Quality Stuff" }]

  const postsexample = [{ name: "example 1", author: "Bob", language: "Html", snip: "<p>Hello World</p>", avatar: faCat, note: "Quality Stuff" }, { name: "example 2", author: "Tim", language: "Html", snip: "<p>Good night moon</p>", avatar: faDog, note: "Some Good Code Here" }]

  return (<>
    {loggedIn ? (<>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Jumbotron style={{ marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7" }}>
              <h4>Global Code Search</h4>
              <FormGroup>
                <Label for="exampleCustomSelect">Select a Language</Label>
                <CustomInput type="select" id="exampleCustomSelect" name="customSelect" >
                  <option value="">Select</option>
                  <option>JavaScript</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>Mark Down</option>
                  <option>Handlebars</option>
                </CustomInput>
              </FormGroup>
              <br />
              <Button color="primary">Search</Button>
              <br />
              {globalexample.map(item => <><AceModalGlobal name={item.name} snip={item.snip} author={item.author} language={item.language} note={item.note} /><br /></>)}
            </Jumbotron>
          </Col>
          <Col sm={12} md={8}>
            <Jumbotron style={{ marginTop: "5%", opacity: "0.7" }}>
              <h2 style={{ textAlign: "center" }}>News Feed:</h2>
              {postsexample.map((item) => <><Posts name={item.name} snip={item.snip} author={item.author} language={item.language} avatar={item.avatar} note={item.note} /><br /></>)}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <FooterPage />


    </>
    ) : (
        <LogInBro />
      )}

  </>
  )
}
export default Home;
