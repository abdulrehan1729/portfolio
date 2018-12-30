import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
        <section id="about">
        <div className="row">
            <div className="three columns">
                <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
             </div>
             <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>I have an experience of one year in software engineering working with small startup.
                while I'm a proficient with server side development (Node.js building API's and relative content).
                and able to design simple webpages using web-technologies like HTML, CSS, JavaScript.
              </p>
                <div className="row">
                   <div className="columns contact-details">
                      <h2>Contact Details</h2>
                    <p className="address">
                             <span>Abdul Rehan</span><br/>
                             <span>BTM layout 1st stage <br/>
                                   Bangalore, Karnataka
                       </span><br/>
                             <span>+91-9669881987</span><br/>
                       <span>abdulrehan1729@gmail.com</span>
                         </p> 
                 </div>
                 <div className="columns download">
                    <p>
                       <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                    </p>
                 </div>
                </div> 
             </div> 
          </div>
     </section> 
  
  
    );
  }
}

export default About;
