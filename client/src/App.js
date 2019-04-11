import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    apiCalls: 0
  }

  componentDidMount() {
    let sendBody = {"query":`mutation{incrCalls(key: "apiCalls")}`}

    fetch('http://localhost:4000/graphql', {
      method: 'post',
      body: JSON.stringify(sendBody),
      headers: {
        'Accept-Encoding':'gzip, deflate, br',
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Connection':'keep-alive',
        'DNT':'1',
        'Origin':'http://localhost:4000'
      }
    })
    .then(res => res.json())
    .then(data => {
      let newCalls = data.data.incrCalls
      this.setState({apiCalls: newCalls})
    });
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
