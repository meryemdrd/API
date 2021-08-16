import React from 'react'
 import {Spinner} from 'react-bootstrap'
 import Post from "./Post"

const PostList = ({posts, loadPosts}) => {
    return (
        <div style={{  display: 'flex', marginLeft:"30px", marginTop:"50px", }} > 
            {
                loadPosts ? (
                    <Spinner/>
                ) :(
                    posts.map((el) => <Post post={el} key={el.id} />)
                )
            }
        </div>
    )
}

export default PostList
