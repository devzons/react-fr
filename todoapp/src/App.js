import React from 'react'

// import TodoItem from './components/TodoItem'
// import todosData from './components/todosData'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }
  
//   render() {
//     const todoList = this.state.todos.map( item => <TodoItem key={item.id} item={item} />)

//     return(
//       <div className="todo-list">
//         {todoList}
//       </div>
//     )
//   }  
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }      
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }

}

export default App