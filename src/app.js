import React, { Suspense, lazy } from 'react'
import { hot } from 'react-hot-loader'
const Warning = lazy(() => import('./warning'))

class App extends React.Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        {this.state.count > 10 && (
          <Suspense fallback={null}>
            <Warning />
          </Suspense>
        )}
      </div>
    )
  }
}

export default hot(module)(App)
