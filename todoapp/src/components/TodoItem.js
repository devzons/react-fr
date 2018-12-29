import React from 'react'

function TodoItem(props) {
  return (
    <div className="todo-list__item">
      <input type="checkbox" checked={props.item.completed} onChange= {() => console.log("changed")} /> 
      <p>{props.item.text}</p>
      <p>{props.item.completed}</p>
    </div>
  )
}

export default TodoItem