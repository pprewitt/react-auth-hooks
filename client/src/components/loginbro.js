import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Card, CardBody} from 'reactstrap'


function LogInBro(){


    return(
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", marginTop: "10%"}}>
        
        <Card 
        style={{ width: '40rem' }}
        className="mb-2" style={{ opacity:".8", backgroundColor:"gray", color:"white"}}>
            <h1 style={{textAlign:"center"}}>Quik Code Say:</h1>
            <CardBody style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", opacity:".8"}}>
            <h4>You Must Log in to view this page </h4>
            <Link to="/login">
                <Button color="primary"> Login </Button>
            </Link>
            </CardBody>

        </Card>
      </div>)
}
export default LogInBro