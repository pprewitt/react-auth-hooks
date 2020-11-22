import React, {useState} from 'react'

import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'



function FollowModal({name, skills}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const followUser =() => {}
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
          <ModalBody>
    <h4>{name} has these skills: "{skills}" do you want to follow their code snips?</h4>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button onClick={followUser} variant="primary">Yes</Button>
          </ModalFooter>
        </Modal>
      </>)

}
export default FollowModal
