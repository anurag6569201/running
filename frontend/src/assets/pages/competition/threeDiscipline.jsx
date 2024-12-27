import React from 'react';
import DesignBar from '../home/design_bar';
import Footer from '../home/footer';


function ThreeDiscipline() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center mb-4">
            <span>The three disciplines</span>
            <h1 class="title mt-3" style={{fontSize:'3rem'}}>
                <span style={{fontSize:'3.7rem'}}>A</span>theletics <span>*</span> <span style={{fontSize:'3.7rem'}}>B</span>adminton <br /> <span style={{fontSize:'3.7rem'}}>C</span>ricket
            </h1>
            <p>Every child knows these three forms of movement just from playing with their friends. They are required in almost every sport and are practised and perfected in athletics.</p>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <img loading='lazy' className='desc_img' src="images/compt/threeDesc.png" alt="" />
          </div>
        </div>
      </div>
      <DesignBar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className='text-center'>The Sports Kid Talent Hunt is a triathlon featuring the following disciplines:</h2>
          </div>
          <div className="col-md-12 d-flex small_desc_btn mt-3">
            <span className="shadow_v1">Sprint60m - 1 attempt</span>
            <span className="shadow_v1">Cricket - T10</span>
            <span className="shadow_v1">Badminton</span>
          </div>
        </div>
      </div>

      <div className="container mt-5 three_container_1 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 left_three">
            <h1>Sprint 60 m</h1>
            <p>Whether you use the low start, as the pros do, or the "easier" high start, the objective is clear: sprint to the finish line as fast as possible! Attention: Don't start too early! A false start can happen, but if anyone starts again before the starting signal, they will unfortunately be disqualified.</p>
            <a href="document/sample.pdf" target='_blank' style={{textDecoration:'none',color:'#fff'}}><span className='left_three_btn shadow_v1'>Rules of Sprint <i class="bi bi-arrow-up-right"></i></span></a>
          </div>
          <div className="col-md-5">
            <img loading='lazy' className='three1' src="images/compt/three1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container three_container_2 mb-5">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
            <img loading='lazy' className='three2' src="images/compt/cricket.png" alt="" />
          </div>
          <div className="col-md-5 left_three">
            <h1>Cricket - T10</h1>
            <p>In the Cricket T10 event, teams will compete in a fast-paced, thrilling 10-over match. Players will showcase their batting, bowling, and fielding skills within a limited time frame. The goal is to score as many runs as possible while maintaining tight bowling and sharp fielding. With only 10 overs per side, every moment counts, and strategy plays a crucial role</p>
            <a href="document/sample.pdf" target='_blank' style={{textDecoration:'none',color:'#fff'}}><span className='left_three_btn shadow_v1'>Rules of Cricket T10 <i class="bi bi-arrow-up-right"></i></span></a>
          </div>
        </div>
      </div>
      <div className="container mb-5 three_container_3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 left_three">
            <h1>Badminton</h1>
            <p>In the Badminton event, participants will compete in fast-paced singles or doubles matches. The objective is to outmaneuver your opponent by hitting the shuttlecock over the net with precision, speed, and agility. Players must focus on quick reflexes, accurate serves, and strategic placements to gain points.</p>
            <a href="document/sample.pdf" target='_blank' style={{textDecoration:'none',color:'#fff'}}><span className='left_three_btn shadow_v1'>Rules of Badminton <i class="bi bi-arrow-up-right"></i></span></a>
          </div>
          <div className="col-md-5">
            <img loading='lazy' className='three3' src="images/compt/badminton.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThreeDiscipline;
