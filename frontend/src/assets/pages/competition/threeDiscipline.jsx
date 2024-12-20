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
            <h1>Running <span>*</span> Jumping <br />Throwing</h1>
            <p>Every child knows these three forms of movement just from playing with their friends. They are required in almost every sport and are practised and perfected in athletics.</p>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <img className='desc_img' src="images/compt/threeDesc.png" alt="" />
          </div>
        </div>
      </div>
      <DesignBar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2 className='text-center'>The Athletics Kids Cup is a triathlon consisting of the following disciplines</h2>
          </div>
          <div className="col-md-12 d-flex small_desc_btn mt-3">
            <span className="shadow_v1">Sprint60m - 1 attempt</span>
            <span className="shadow_v1">Long Jump with Zone Jump - 3 attempts</span>
            <span className="shadow_v1">Ball Throw 200 g - 3 attempts</span>
          </div>
        </div>
      </div>

      <div className="container mt-5 three_container_1 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 left_three">
            <h1>Sprint 60 m</h1>
            <p>Whether you use the low start, as the pros do, or the "easier" high start. The objective is clear: sprint to the finish line as fast as possible! Attention: Don't start too early! Anyone can make a false start. But if anyone starts a second time before the starting signal, unfortunately they will be disqualified.</p>
            <span className='left_three_btn shadow_v1'>How to Sprint <i class="bi bi-arrow-up-right"></i></span>
          </div>
          <div className="col-md-5">
            <img className='three1' src="images/compt/three1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container three_container_2 mb-5">
        <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
            <img className='three2' src="images/compt/three2.png" alt="" />
          </div>
          <div className="col-md-5 left_three">
            <h1>Sprint 60 m</h1>
            <p>Whether you use the low start, as the pros do, or the "easier" high start. The objective is clear: sprint to the finish line as fast as possible! Attention: Don't start too early! Anyone can make a false start. But if anyone starts a second time before the starting signal, unfortunately they will be disqualified.</p>
            <span className='left_three_btn shadow_v1'>How to Sprint <i class="bi bi-arrow-up-right"></i></span>
          </div>
        </div>
      </div>
      <div className="container mb-5 three_container_3">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 left_three">
            <h1>Sprint 60 m</h1>
            <p>Whether you use the low start, as the pros do, or the "easier" high start. The objective is clear: sprint to the finish line as fast as possible! Attention: Don't start too early! Anyone can make a false start. But if anyone starts a second time before the starting signal, unfortunately they will be disqualified.</p>
            <span className='left_three_btn shadow_v1'>How to Sprint <i class="bi bi-arrow-up-right"></i></span>
          </div>
          <div className="col-md-5">
            <img className='three3' src="images/compt/three3.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ThreeDiscipline;
