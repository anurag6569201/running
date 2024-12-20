import React from 'react';
import '../../css/org/org.css'
import Footer from '../home/footer';


function DocumentsDownload() {
  return (
    <>
    <div className="container mb-5">
      <div className="row mt-5 justify-content-center">
        <h1 className='text-center mb-4'>Documents & Downloads</h1>
          <div className="col-md-10">
            <div className="row documents_row p-3">
            <div className="col-md-4">
                <h2>Competition</h2>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Organisers Handbook</span></span></a>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">qualification system finals</span></span></a>
              </div>
            </div>
            <div className="row documents_row p-3">
            <div className="col-md-4">
                <h2>Events</h2>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">60 m sprint</span></span></a>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Ball Throw</span></span></a>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Long Jump</span></span></a>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Long Jump alternative</span></span></a>
              </div>
            </div>
            <div className="row documents_row p-3">
            <div className="col-md-4">
                <h2>Values</h2>
              </div>
              <div className="col-md-4">
              <a class="nav-link active" aria-current="page" href=''><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Ethics charter</span></span></a>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DocumentsDownload;
