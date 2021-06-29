import React from 'react'
import img from '../image/user.jpg';
import NavbarM from './NavbarM';

function About() {
    return (
        <React.Fragment>
		<NavbarM/>
          <h2>About Me</h2>
		  <div className="image">
		  <img src={img} alt="" width="225px" height="200px"/>
		  <div className="description">
		  <h3>NAMAN MATHUR</h3>
			  <p>I am a Web developer. I ❤ love coffee and brew my own beers.</p>
			  <p>I started learning to code when I was in 1st semester. Over time, I have gained a wealth of experience designing and developing web applications.</p>
			  <p></p>
		  </div>
		  </div>
		  </React.Fragment>
	)
}

export default About