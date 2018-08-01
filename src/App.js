import React, { Component } from 'react';
import './App.css';
import {Stoplight} from './components/stoplight'
import {Buttons} from './components/buttons'

export class App extends Component {
  render(){
    return(
      <div>
        <Stoplight store={this.props.store} />
        <Buttons store={this.props.store} />
      </div>
    )
  }
}

export default App;
