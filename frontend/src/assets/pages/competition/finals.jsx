import DesignBar from '../home/design_bar';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '../home/footer';
import Swiper_slide from './swiper_v1';

function Finals() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center mb-4">
          <h1>Bhubaneswar Regional Finals</h1>
          <p>As an absolute highlight, five regional finals will be held in January/February 2025, featuring the best girls and boys from the respective regions. Participants will be selected based on the region's top lists by a predefined deadline (10 December 2024) or through direct invitations from the organizer. The regional finals will be conducted in a professional setup at a modern athletics facility with trained judges and high-quality equipment.</p>
            <span className='rules_category_btn shadow_v1'>Read More <i class="bi bi-arrow-up-right"></i></span>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center mb-5">
        <img loading='lazy' className='desc_img' src="images/compt/threeDesc.png" alt="" />
      </div>
      <DesignBar />
      <Swiper_slide />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
          <h1>Grand Bhubaneswar Final</h1>
          <p>The best athletes from the five regional finals qualify for the Grand Bhubaneswar Final. The top 30 athletes in each age category will compete against each other.</p>
          <span>Date: Coming Soon...</span>

          </div>
          <div className="col-md-5 ground_img">
            <img loading='lazy' style={{borderRadius:'30px'}} src="images/compt/ground.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Finals;
