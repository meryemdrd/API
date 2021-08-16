import React from 'react'
import { Card, Button } from 'react-bootstrap'

import {Link} from 'react-router-dom';

const Users = ({user}) => {
    return (
        <div style={{  display: 'flex', marginLeft:"30px", marginTop:"50px", }} >

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png " />
  <Card.Body>
    <Card.Title> {user.name+" "+ user.username} </Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    <Button variant="primary">
        <Link to ={`/Users/${user.id}`} >
       users details </Link> 
        </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Users