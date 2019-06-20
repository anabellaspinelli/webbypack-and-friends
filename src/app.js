import React from "react"
import { hot } from "react-hot-loader"

class App extends React.Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 10 }))}
        >
          -
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 10 }))}
        >
          +
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
