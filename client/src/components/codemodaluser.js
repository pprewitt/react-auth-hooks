import React, { useState, useRef } from 'react'
import {Button, Form, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup  }from 'reactstrap'

import ReactAce from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";


function AceModelUser({name, title, snip, sniptwo, props}){

    const [show, setShow] = useState(false);
    const [snipState,setSnip] =useState({})

    function handleSnipInput(event){
      const { name, value } = event.target;
      setSnip({...snipState, [name]: value })
      console.log(snipState)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const updateSnip =()=>{}
    const [Language, setLanguage] = useState("html");
    const [LanguageTwo, setLanguageTwo] = useState("html");

    function languageSelect(event) {
        setLanguage($("#languageSelect").val());
        console.log("Working?", $("#languageSelect").val())
        handleSnipInput(event)
    }

    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);

    function copyClipboard1() {
      textAreaRef1.current.select();
      document.execCommand('copy');
    }

    function copyClipboard2() {
      textAreaRef2.current.select();
      document.execCommand('copy');
    }

  
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
          <h1>{name}</h1>
          </ModalHeader>
          <ModalBody >
          <FormGroup controlId="formBasicEmail">
              <FormControl type="email" value={name} onChange={handleSnipInput} />
          </FormGroup>
          <div className="d-flex">

             <div className="editor mb-2">
                  <ReactAce name="editorOne" mode={Language} theme="monokai" setReadOnly={false} width={465} onChange={handleSnipInput} maxLines={Infinity} value={snip}/>
                  <textarea  ref={textAreaRef1} value={snip} className="textArea"></textarea>
                  <Button onClick={copyClipboard1} className="float-right m-1">Copy Code</Button>
             </div>
          </div>

          <Form.Control name="language" size="sm" as="select" id="languageSelect" onChange={languageSelect}>

              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="markdown">Mark Down</option>
              <option value="handlebars">Handlebars</option>
          </Form.Control>
          <div className="d-flex">
             <div className="editor mt-3 mb-2">
                 <ReactAce name="editorTwo" mode={LanguageTwo} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={sniptwo}  onChange={handleSnipInput}/>
                 <textarea  ref={textAreaRef2} value={sniptwo} className="textArea"></textarea>
                  <Button onClick={copyClipboard2} className="float-right m-1">Copy Code</Button>
             </div>
          </div>

          <Form.Control size="sm" as="select" id="languageSelect" onChange={languageSelect}>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="markdown">Mark Down</option>
              <option value="handlebars">Handlebars</option>
          </Form.Control>
          <br />
          <FormGroup controlId="formBasicEmail">
              <Form.Control name="keywords"  type="email" placeholder="Keywords" onChange={handleSnipInput} />
          </FormGroup>

          <Form.Control name="share" size="sm" as="select" onChange={handleSnipInput}>
              <option>Sharing Preferences</option>
              <option>Private</option>
              <option>Public</option>
              <option>Followers only</option>
          </Form.Control>
          
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="primary" onClick={updateSnip}>Update</Button>
          </ModalFooter>
        </Modal>
      </>)

}
export default AceModelUser
