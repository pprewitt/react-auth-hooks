import React, { useState, useRef } from 'react'
import { Button,  Modal, Card,   ModalHeader, ModalBody, ModalFooter, } from 'reactstrap'

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //need to change language to user choice
  const [Language, setLanguage] = useState("html");

  const textAreaRef1 = useRef(null);

  function copyClipboard() {
    textAreaRef1.current.select();
    document.execCommand('copy');
  }

  const SaveGlobal = () => { }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <h1>{name + " by " + author}</h1>
        </ModalHeader>
        <ModalBody>

          <div className="d-flex">
            <div className="editor">
              <ReactAce mode={Language} theme="monokai" value={snip} setReadOnly={true} width={465} maxLines={Infinity} />
              <textarea ref={textAreaRef1} value={snip} className="textArea"></textarea>
            </div>
          </div>

        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button onClick={SaveGlobal} variant="primary">Save to your Library</Button>
          <Button onClick={copyClipboard} variant="primary">Copy To Clipboard</Button>
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
