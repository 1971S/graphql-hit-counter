import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    apiCalls: 0
  }

  componentDidMount() {
    // ask for the number of connections, increase it and update the value on the state to display
    console.log('hello')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.apiCalls}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
