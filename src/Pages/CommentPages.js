import React , { useEffect, useState} from 'react'
import Axios from "axios"
import CommentList from '../CommentList';

const Comments = (props) => {
    const [comment, setComment]= useState([]);
    const [loadComment,setLoadComment] = useState(true);
    //const {post}= props.location.State;
    const {id} = props.match.params;

    //Get Comments 
    
     const getComments = () => {
         Axios.get (`https://jsonplaceholder.typicode.com/posts/${id}/Comments`)
        .then ((res)=>{
            setComment(res.data)
            setLoadComment(false)
        })
         .catch((err)=>console.log(err))
        }

        useEffect(()=>{
            getComments()

            //eslint-disable-next-line
        },[])
    return (
        <div>
          
            <CommentList  comment ={comment} loadComment={loadComment} />
        </div>
    )
}

export default Comments
