import React from 'react'
import { Spinner, Card, ListGroup } from 'react-bootstrap'

const OneUser = ({user,LoadUser}) => {
    return (
        <div>
          {
              LoadUser ? (
                  <Spinner/>
              ) :(
                <Card style={{ width: '18rem',  display: 'flex', marginLeft:"30px", marginTop:"50px", }}>
                <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png" />
                <Card.Body>
                  <Card.Title> Name: {user.name} </Card.Title>
                  <Card.Text>
                    Email: {user.email}
                  </Card.Text>
                  <ListGroup variant="flush">
    <ListGroup.Item>  Phone: {user.phone} </ListGroup.Item>
    <ListGroup.Item> Adress : {user.address} </ListGroup.Item>
    <ListGroup.Item> Company: {user.company} </ListGroup.Item>
  </ListGroup>
                </Card.Body>
              </Card>
              )
          }
        </div>
    )
}

export default OneUser
