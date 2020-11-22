import React, {useContext} from 'react'
import {Jumbotron} from 'reactstrap'
import Editor from '../components/Editor'
import FooterPage from '../components/FooterPage'
import LogInBro from '../components/loginbro'
import UserContext from '../utils/UserContext'


function NewSnip(){

    const { user, loggedIn, logout } = useContext(UserContext);
    return(<>{loggedIn ? (<>
    {/* giant ace editor goes here */}
    <Jumbotron style={{opacity:"0.8"}}>
        <Editor />
        {/* code title goes here */}
        {/* code type input goes here */}
        {/* keywords input goes here */}
        {/* savecode */}
    </Jumbotron>
    <FooterPage/>
    </>):(<LogInBro/>)}</>
    )

}
    export default NewSnip