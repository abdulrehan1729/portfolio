import React, { Component } from 'react';


class Resume extends Component {
  render() {
    return (
        <section id="resume">

        
        <div className="row education">
  
           <div className="three columns header-col">
              <h1><span>Education</span></h1>
           </div>
  
           <div className="nine columns main-col">
  
              <div className="row item">
  
                 <div className="twelve columns">
  
                    <h3>Rajiv Gandhi Technical University</h3>
                    <p className="info">Bachelor of Engineering <span>&bull;</span> <em className="date">June 2016</em></p>
  
                    <p>
                        I'm an Engineering graduate in Electroincs and Communication Engineering 
                        from Lakshmi Narain College of Engineering Indore with some CGPA (cool enough for this job)                
                    </p>  
                 </div>  
              </div>   
            </div> 
        </div> 
        
        <div className="row work">
  
           <div className="three columns header-col">
              <h1><span>Work</span></h1>
           </div>
  
           <div className="nine columns main-col">  
              <div className="row item">  
                 <div className="twelve columns">  
                    <h3>MavomLabs pvt ltd</h3>
                    <p className="info">Software Developer <span>&bull;</span> <em className="date">April 2018 - Present</em></p>
  
                    <p>
                    As a Software Developer I've developed certain programs using different technologies.
                    like web-development, Handling server side and client side programs and some time with data bases.
                    Mostly the work is on developing server Using Node.js on Express and fulfil the client requirements.
                    </p>  
                 </div>  
              </div>   
                 
           </div>   
        </div> 
  
        <div className="row skill">
             <div className="three columns header-col">
              <h1><span>Skills</span></h1>
           </div>
  
             <div className="nine columns main-col">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
              </p>
                    <div className="bars">
                       <ul className="skills">
                         <li><span className="bar-expand photoshop"></span><em>Node.js</em></li>
                    <li><span className="bar-expand illustrator"></span><em>Express.js</em></li>
                          <li><span className="bar-expand wordpress"></span><em>JavaScript</em></li>
                          <li><span className="bar-expand css"></span><em>CSS</em></li>
                          <li><span className="bar-expand html5"></span><em>HTML5</em></li>
                    <li><span className="bar-expand jquery"></span><em>MySql</em></li>
                      </ul>
                    </div>
                </div> 
          </div> 
     </section> 
  
    );
  }
}

export default Resume;
