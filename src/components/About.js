import React from 'react';

function About() {

  return (

    <div className="components" id="about-div">
      <img src={require("../media/iona.png")} alt='' id="profile-picture" />
      <p className="p" id="about" >I've recently completed the full-time Software Engineering program at Flatiron School and am excited to have discovered my passion in life. Without knowing it, I think I've always been a coder at heart - having the chance to learn and develop myself is what motivates me more than anything else, and I love being able to combine my creative side with my problem solving skills. </p> 
    </div>
    
  );
  
}

export default About;