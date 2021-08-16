import React from 'react'

const Comment = ({el}) => {
    return (
        <div>
            <h1>Name:</h1>
            <h2> {el.name} </h2>
            <h1>comments</h1>
            <h2> {el.body} </h2>
        </div>
    )
}

export default Comment
