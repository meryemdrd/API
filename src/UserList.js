import React from 'react';
import { Spinner } from 'react-bootstrap';
import Users from './Users.js';  
const UserList= ({users, LoadUsers}) => {
    return (
        <div style={{display:"flex", flexWrap:"wrap",marginLeft:"160px",  }}>
            {
                LoadUsers ? (  <Spinner animation="border" variant="dark" />):(
                users.map((el)=><Users user={el} key={el.id} />))
            }
        </div>
    )
}

export default  UserList 
