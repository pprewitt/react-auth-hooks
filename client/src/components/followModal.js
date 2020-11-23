import React, {useState} from 'react'

import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'



function FollowModal({name, bio}){

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

    const followUser =() => {}
    return (   
       <div>
      <Button color="primary" onClick={toggle}>{name}</Button>
      <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle} charCode="X">{name}</ModalHeader>
        <ModalBody>
        {bio}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={followUser}>Follow</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )

}
export default FollowModal
