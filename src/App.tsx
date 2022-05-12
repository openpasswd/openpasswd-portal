import React from 'react';
import Navbar from './components/Layout/Navbar';
import Info from './components/Layout/Intro';
import Home from './containers/Home/Home';
import End from './components/Layout/End';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Info />
        <Home />
        <End />
      </>
    );
  }
}

export default App;
