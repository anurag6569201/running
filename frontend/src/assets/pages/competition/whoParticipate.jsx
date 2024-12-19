import React from 'react';
import Section3 from '../home/section3';
import Footer from '../home/footer';


function WhoParticipate() {
  return (
    <div>
      <div className="container particcontainer mb-5">
        <div className="row partic_row_wrapper">
          <div className="col-md-6">
            <img src="images/compt/parT1.png" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Who can participate?</h1>
            <p>Do you want to take part in a sporting competition with your age group and have a lot of fun with your friends? Were you born in 2009 or younger? Then the Athletics Kids Cup is just the thing for you. In the Athletics Kids Cup you compete in three disciplines</p>
            <ul>
                <li><div className="span_circle shadow_v1"></div> 60m Sprint</li>
                <li><div className="span_circle shadow_v1"></div>Long Jump</li>
                <li><div className="span_circle shadow_v1"></div>Ball Throw</li>
              </ul>
            <p>All three disciplines together give you your score. If you would like to take part in one of our competitions, all you have to do is convince the responsible persons at your school to organise an Athletics Kids Cup.</p>
          </div>
        </div>
        <Section3/>
      </div>
        <Footer/>
    </div>
  );
}

export default WhoParticipate;
