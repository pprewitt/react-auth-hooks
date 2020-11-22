import React from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Posts({name, author, language, snip, avatar, note}){

    return(<Card style={{ width: '100%',  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
 <FontAwesomeIcon icon={avatar} size="3x" className = "mt-2"></FontAwesomeIcon>
    <CardBody>
      <CardText>
       {author} Created a code snippet Titled {name} click the button to visit it
      </CardText>
      <AceModalGlobal name={name} author={author} language={language} snip={snip} avatar={avatar} note={note}/>
    </CardBody>
  </Card>)
}
export default Posts