import React from 'react';
import Navbar from './components/Layout/Navbar';
import Home from './containers/Home/Home';
import Hero from './components/Layout/Hero';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    );
  }
}

export default App;
