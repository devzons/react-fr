import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    return (
      <div>
        <button onclick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default App;
