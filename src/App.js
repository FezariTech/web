import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Body1 from './components/Body';
import Boxes from './components/boxes';
import Partners from './components/partners';
import Form from './components/Form';
import Footer from './components/Footer';
import OpenPositions from './components/Positions';

//

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Body1></Body1>
      <Boxes></Boxes>
      <Form></Form>
      <OpenPositions></OpenPositions>

    <Partners></Partners>
    <Footer></Footer>

    </div>
  );
}

export default App;
