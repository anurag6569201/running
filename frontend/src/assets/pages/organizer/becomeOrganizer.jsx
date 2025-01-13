import DesignBar from '../home/design_bar';
import Footer from '../home/footer';
import Register from '../home/register';

import { Link } from 'react-router-dom';
import Swiper_slide from '../competition/swiper_v1';
import DesignImages from '../home/design_images';

function BecomeOrganizer() {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <h1>How easy it is to organise an Athletics Talent Hunt</h1>
          <p>We support you in organising an Athletics Talent Hunt. Each school/organiser receives a ready-to-use toolkit to organise its own competition. The toolkit includes:</p>
          <Register/>
        </div>
        <div className="col-md-5">
          <img loading='lazy' className='img-fluid' src="images/org/org1.png" alt="" />
        </div>
      </div>
    </div>
    <DesignImages/>
    <Swiper_slide/>
    <div className="container mt-5 mb-5">
        <h1 className='howWh1'>The <br />Competition</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img loading='lazy' src="images/compt/howW3.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">The three discipline</h5>
                    <p class="card-text">Running - Jumping - Throwing: All about the disciplines in the Athletics Talent Hunt.</p>
                    <span class="card-text greenhowW shadow_v1"><Link className='text_style_link' to="/rulesCategory">More Info <i class="bi bi-arrow-up-right"></i></Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card mb-3 shadow_v1">
              <div class="row g-0">
                <div class="col-md-4">
                  <img loading='lazy' src="images/compt/howW4.png" class="img-fluid rounded-start howWimg1" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Categories and rules</h5>
                    <p class="card-text">Here you can find out everything about the categories, rules, scoring and conditions of participation.</p>
                    <span class="card-text bluehowW shadow_v1"><Link className='text_style_link' to="/threeDiscipline">More Info <i class="bi bi-arrow-up-right"></i></Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>

    </>
  );
}

export default BecomeOrganizer;
