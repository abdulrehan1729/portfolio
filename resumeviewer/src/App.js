import React, { Component } from 'react';

import './App.css';
import Header from  './Components/Header';
import About from  './Components/About';
import Resume from  './Components/Resume';
import Portfolio from  './Components/Portfolio';
import Testimonial from  './Components/Testimonial';
import Contact from  './Components/Contact';
import Footer from  './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
