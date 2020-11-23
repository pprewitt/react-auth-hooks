import React, { useState, useRef } from 'react'

import {Button, Modal, ModalHeader,ModalBody, ModalFooter, Form, FormGroup,Input, InputGroup,InputGroupAddon}from 'reactstrap'


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
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const [snipState,setSnip] =useState({})

    function handleSnipInput(event){
      const { name, value } = event.target;
      setSnip({...snipState, [name]: value })
      console.log(snipState)
    }

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

   <div>
    <Button color="primary" onClick={toggle}>{name}</Button>
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle} close={closeBtn}>{name}</ModalHeader>
      <ModalBody>
      <div className="editor mb-2">

                  <ReactAce name="editorOne" mode={Language} theme="monokai" setReadOnly={false} width={465} onChange={handleSnipInput} maxLines={Infinity} value={snip}/>
                  <textarea  ref={textAreaRef1} value={snip} className="textArea"></textarea>
                  <Button onClick={copyClipboard1} className="float-right m-1">Copy Code</Button>
             </div>


          <Input type="select" name="languageOne" id="exampleSelectMulti"  onChange={languageSelect}>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="markdown">Mark Down</option>
              <option value="handlebars">Handlebars</option>
          </Input>
          <div className="d-flex">
             <div className="editor mt-3 mb-2">
                 <ReactAce name="editorTwo" mode={LanguageTwo} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={sniptwo}  onChange={handleSnipInput}/>
                 <textarea  ref={textAreaRef2} value={sniptwo} className="textArea"></textarea>
                  <Button onClick={copyClipboard2} className="float-right m-1">Copy Code</Button>
             </div>
          </div>
          <InputGroup size="sm">
          <InputGroupAddon addonType="prepend"></InputGroupAddon>
          <Input placeholder="Title" onChange={handleSnipInput}/>
        </InputGroup>
        <br></br>
          <Input name="languageTwo" type="select" id="languageSelect" onChange={languageSelect}>
              <option value="html">HTML</option>
              <option value="javascript">Javascript</option>
              <option value="css">CSS</option>
              <option value="markdown">Mark Down</option>
              <option value="handlebars">Handlebars</option>
          </Input>
          <br />

      


          <Input name="share" size="sm" type="select" onChange={handleSnipInput}>
              <option>Sharing Preferences</option>
              <option>Private</option>
              <option>Public</option>
              <option>Followers only</option>

          </Input>
          <br></br>
          <Input type="textarea" name="Notes" id="exampleText" onChange={handleSnipInput} placeholder="notes" />
      </ModalBody>
      <ModalFooter style={{ display:"flex",justifyContent:"space-between"}}>
        <Button color="danger" onClick={toggle}>Delete</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button color="primary" onClick={updateSnip}>Update</Button>
      </ModalFooter> 
      
    </Modal>

  </div>




            
)


}
export default AceModelUser
