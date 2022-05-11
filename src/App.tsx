import React from 'react';
import Navbar from './components/Layout/Navbar';
// import Home from './containers/Home/Home';
import Info from './components/Layout/Info';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Info />
      </>
    );
  }
}

export default App;
