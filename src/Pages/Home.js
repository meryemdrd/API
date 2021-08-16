import React from 'react'
import UserList from '../UserList';
const Home = ({users,loadUsers}) => {
    return (
        <div>
            <UserList users={users} LoadUsers={loadUsers} />
        </div>
    )
}

export default Home
