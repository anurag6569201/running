import React from 'react';
import Footer from '../home/footer';

function Imprint() {
  return (
    <>
    <div className="container mb-5">
      <div className="row">
        <h1 className="text-center">Imprint</h1>
        <div className="container boxes_wrapper_container mt-5 mb-5 about_us_boxes_wrapper">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
              <div class="col-md-4">
                <div class="card h-100">
                  <div class="card-body shadow_v1 info-box date">
                    <h5 class="card-title">Athletics Kids Cup</h5>
                    <p class="card-text">C/o Striders Foundation
                        12, Satnam Mansion
                        190, Dr. B. Ambedkar Road,
                        Dadar (E), Mumbai 400014</p>
                      <p>contact@athleticskidscup.com</p>
                      <p>+91 9321591799</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100">
                  <div class="card-body shadow_v1 info-box point-system">
                    <h5 class="card-title">Organiser of the Athletics Kids Cup</h5>
                    <p class="card-text">Dspowerparts GmbH
                      Feldhof 11
                      6300 Zug
                      Switzerland</p>
                    <p>info@dspowerparts.ch</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Imprint;
