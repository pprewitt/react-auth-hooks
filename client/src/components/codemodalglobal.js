import React, { useState, useRef } from 'react'
import { Button, Modal, Card, Collapse, CardHeader, CardBody, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap'

import ReactAce from 'react-ace';


import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";



function AceModelGlobal({ name, title, note, author, snip }) {


  const [modal, setModal] = useState(false);

  //need to change language to user choice
  const [Language, setLanguage] = useState("html");

  const textAreaRef1 = useRef(null);

  function copyClipboard() {
    textAreaRef1.current.select();
    document.execCommand('copy');
  }

  const SaveGlobal = () => { }


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setModal(!modal);
  const toggles = () => setIsOpen(!isOpen);

  return (
    <>
      <Button color="primary" onClick={toggle}>
        {name}
      </Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} charCode="Y"><h1>{name + " by " + author}</h1></ModalHeader>
        <ModalBody>
        <div className="d-flex">
            <div className="editor">
              <ReactAce mode={Language} theme="monokai" value={snip} setReadOnly={true} width={465} maxLines={Infinity} />
              <textarea ref={textAreaRef1} value={snip} className="textArea"></textarea>
            </div>
          </div>
          <br/>
          <Button color="primary" onClick={toggles} style={{ marginBottom: '1rem' }}>Notes</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {note}
          </CardBody>
        </Card>
      </Collapse>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
          <Button color="secondary" onClick={copyClipboard}>Copy To Clipboard</Button>
          <Button color="primary" onClick={SaveGlobal}>Save to your Library</Button>{' '}
        </ModalFooter>
        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Code Note
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{note}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </Modal>
    </>)

}
export default AceModelGlobal
