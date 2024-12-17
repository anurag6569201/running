import React from 'react';
import "../../css/global/navbar.css";

function Navbar() {
  return (
    <nav class="navbar fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#"><img src='images/home/logo.png' alt="" /></a>
            <div>
                <a class="navbar-brand" href="#"><img src='images/home/logo.png' alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src='images/home/logo.png' alt="" /></h5>
                    <button type="button" class="btn-close shadow_v1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Home</span></span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Competition</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>How it works</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Who can participate?</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>The three disciplines</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Rules and categories</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Finals</span></a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Organizers</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Become an organizer</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Documents and downloads</span></a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">FAQ</span></span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Miscellaneous Info</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Data Protection Regulations</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Conditions of Participation</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Privacy Policy</span></a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-chevron-right"></i><span>Imprint</span></a></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Home</span></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Home</span></span></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;



