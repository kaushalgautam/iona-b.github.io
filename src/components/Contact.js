import React from 'react';

function Contact() {

  return (

    <div className="components one-second-animation" >
      <p className="p" >I'm currently open to work, so please reach out if you are looking for an enthusiastic and creative developer! </p><br></br>
      <div id="contact-div">
        <a href="https://github.com/iona-b" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/github-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://www.linkedin.com/in/iona-brabender" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/linkedin-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href="https://dev.to/ionab" rel="noopener noreferrer" target="_blank" >
          <img src={require("../media/dev.to-icon.svg")} alt='' className="contact-icons" />
        </a><br></br>
        <a href={`mailto:ionabrabender@gmail.com`} >
          <img src={require("../media/send.png")} alt='' className="contact-icons" />
        </a>
      </div>
    </div>
    
  );
  
}

export default Contact;