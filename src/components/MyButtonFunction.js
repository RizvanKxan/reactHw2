import React, { useState } from 'react'

const MyButtonFunction = (props) => {
    const [text,setText] = useState('some text')
    return (
        <>
            <div>{text}</div>
            <button onClick={()=>props.changeHeaderText('New Text')}>
                {props.children}
            </button>
        </>
    )
}

export default MyButtonFunction
