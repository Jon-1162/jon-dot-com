import React from 'react';
import blueShirtGreyBack from './../../img/blueShirtGreyBack.jpg'
import './resume.css'

function Resume() {
  return (
    <div className='backgroundFiller1'>
      <div className='introCard'>
          <div>
            <img className='imgJon' src= {blueShirtGreyBack}/>
          </div>
          <div className='introCardText'>
            <hr></hr>
            <h1>Jon O'Neil</h1>
            <h4>Software Developer</h4>
            <hr></hr>
            <p> my name jon, my name jon, my name jon</p>
            <p> my name jon, my name jon, my</p>
            <hr></hr>
          </div>
      </div>
    </div>
  );
}

export default Resume;
