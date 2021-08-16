import React from 'react'
import { Spinner } from 'react-bootstrap'
import Comment from './Comment'

const CommentList = ( comment,  loadComment) => {
    return (
        <div>
            {
                loadComment ?
                ( < Spinner/>
):(
     comment.map((el) =><Comment key={el.id} el={el} /> )

)
            }
        </div>
    )
}

export default CommentList
