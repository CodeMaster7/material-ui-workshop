import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class App extends Component {
  constructor(){
    super()

    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
        <div className="App">
          <button onClick={this.handleToggle}>Toggle Drawer</button>
          <Drawer openSecondary open={this.state.open}>
            <MenuItem>First Item</MenuItem>
            <MenuItem>Second Item</MenuItem>
            <MenuItem>Third Item</MenuItem>
          </Drawer>
        </div>
    );
  }
}

export default App;
