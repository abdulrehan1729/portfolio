import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header id="home">

        <nav id="nav-wrap">
  
           <a classNameName="mobile-btn" href="#nav-wrap" title="Show navigation"></a>
            <a className="mobile-btn" href="#" title="Hide navigation"></a>
  
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
           </ul> 
  
        </nav> 
  
        <div className="row banner">
           <div className="banner-text">
              <h1 className="responsive-headline">I'm Abdul Rehan.</h1>
              <h3>I'm a Bangalore based <span>software developer</span> and <span>webdesigner</span> working on 
              different technologies client as well as server side. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">                 
                 <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                 <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                 <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                 <li><a href="#"><i className="fa fa-github"></i></a></li>
                 <li><a href="#"><i className="fa fa-skype"></i></a></li>
              </ul>
           </div>
        </div>
  
        <p className="scrolldown">
           <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
  
     </header>
    );
  }
}

export default Header;
