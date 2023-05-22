// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body1 from './components/Body';
import Boxes from './components/boxes';
import Slideshow from './components/carousel';
import Partners from './components/partners';
import Form from './components/Form';
import Footer from './components/Footer';
import OpenPositions from './components/Positions';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
</style>


function App() {
  return (
    <div className="App">

      
      
      <Navbar></Navbar>

      <Body1></Body1>
      <Boxes></Boxes>
{/* 
      <Slideshow></Slideshow> */}
      <Form></Form>

      <OpenPositions></OpenPositions>


    <Partners></Partners>

    <Footer></Footer>

    </div>
  );
}

export default App;
