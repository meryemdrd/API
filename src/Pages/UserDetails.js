import React , {useEffect, useState} from 'react'
import Axios from 'axios'
import OneUser from '../OneUser'
import PostList from '../PostList'


const UserDetails = (props) => {
const [user,setUser] = useState({})
const [loadUser, setLoadUsers] = useState (true)
const [posts, setPosts] =useState([])
const [loadPosts, setLoadPosts] = useState(true)
const {id} = props.match.params

// get user info  
const getUser = () => {
    Axios.get (`https://jsonplaceholder.typicode.com/users${id}`)
    .then((res)=> {
        setUser(res.data)
        setLoadUsers(false)
    })
    .catch((err)=> console.log(err))
}
// get User Posts
 const getPosts = ()=>{
     Axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
     .then((res)=>{
         setPosts(res.data)
         setLoadPosts(false)
     })
     .catch((err)=> console.log(err))
    }
     useEffect(()=>{
         getUser();
         getPosts();
         //eslint-disable-next-line
     },[])
return (
        <div>
            <OneUser user={user} loadUser={loadUser} />
            <PostList posts={posts} loadPosts={loadPosts} />
        </div>
    )
}

export default UserDetails
