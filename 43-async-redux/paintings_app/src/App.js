import React, { Component } from 'react';
import PaintingContainer from './paintings/PaintingContainer';
import MuseumPicker from './paintings/MuseumPicker';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar icon="paint brush" title="Painterest" description="Mother Functions App" />
        <div className="ui grid container">
          <MuseumPicker />
          <PaintingContainer/>
        </div>
      </div>
    );
  }
}

export default App;
