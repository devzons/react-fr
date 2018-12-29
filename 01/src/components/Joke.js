import React from 'react'

const Joke = (props) => {
  return (
    <div>
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      <p style={{color: !props.question && "blue"}}>Punch Line: {props.punchLine}</p>
    </div>
  )
}

export default Joke