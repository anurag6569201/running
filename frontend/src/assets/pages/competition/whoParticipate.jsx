import React from 'react';
import Section3 from '../home/section3';
import Footer from '../home/footer';
import '../../css/compt/compt.css'

function WhoParticipate() {
  return (
    <div>
      <div className="container particcontainer mb-5 howWcontainer">
        <div className="row partic_row_wrapper">
          <div className="col-md-5">
            <img loading='lazy' className='img-fluid' src="images/compt/parT1.png" alt="" />
          </div>
          <div className="col-md-5">
            <h1>Who can participate?</h1>
            <p>Do you want to join an exciting competition with your age group and have fun with your friends? Were you born in 2010 or later? Then the Sports Kid Talent Hunt is perfect for you! Compete in three thrilling disciplines:</p>
            <ul>
              <li><div className="span_circle shadow_v1"></div>Athletics</li>
              <li><div className="span_circle shadow_v1 span_colr-ath"></div>Badminton</li>
              <li><div className="span_circle shadow_v1"></div>Cricket</li>
              </ul>
            <p>Your total score from all three events determines your ranking. To participate, simply convince your school to organize a Sports Kid Talent Hunt event!.</p>
          </div>
        </div>
        <Section3/>
      </div>
        <Footer/>
    </div>
  );
}

export default WhoParticipate;
