import React from 'react';
import "../../css/global/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar">
        <div class="container">
            <Link class="navbar-brand" to="/" style={{display:'flex'}}>
                <img loading='lazy' src='images/home/running.svg' alt="KIDS TALENT HUNT" />
                <img loading='lazy' src='images/home/badminton.svg' alt="KIDS TALENT HUNT" />
                <img loading='lazy' src='images/home/cricket.svg' alt="" />
                <div style={{display:'flex',alignItems:'left',flexDirection:'column'}}>
                    <span>KIDS</span>
                    <span>TALENT HUNT</span>
                </div>
            </Link>
            <div className='extra_navbar_brand'>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                    <img loading='lazy' src='images/home/running.svg' alt="KIDS TALENT HUNT" />
                    <img loading='lazy' src='images/home/badminton.svg' alt="KIDS TALENT HUNT" />
                    <img loading='lazy' src='images/home/cricket.svg' alt="" />
                    <div style={{display:'flex',alignItems:'left',flexDirection:'column'}}>
                        <span>KIDS</span>
                        <span>TALENT HUNT</span>
                    </div>
                    </h5>
                    <button type="button" class="btn-close shadow_v1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Home</span></span></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Competition</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><Link class="dropdown-item" to="/howwork"><i class="bi bi-chevron-right"></i><span>How it works</span></Link></li>
                                    <li><Link class="dropdown-item" to="/whoParticipate"><i class="bi bi-chevron-right"></i><span>Who can participate?</span></Link></li>
                                    <li><Link class="dropdown-item" to="/threeDiscipline"><i class="bi bi-chevron-right"></i><span>The three disciplines</span></Link></li>
                                    <li><Link class="dropdown-item" to="/rulesCategory"><i class="bi bi-chevron-right"></i><span>Rules and categories</span></Link></li>
                                    <li><Link class="dropdown-item" to="/finals"><i class="bi bi-chevron-right"></i><span>Finals</span></Link></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Organizers</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><Link class="dropdown-item" to="/becomeOrganizer"><i class="bi bi-chevron-right"></i><span>Become an organizer</span></Link></li>
                                    <li><Link class="dropdown-item" to="/documentsDownload"><i class="bi bi-chevron-right"></i><span>Documents and downloads</span></Link></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/faq"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">FAQ</span></span></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Miscellaneous Info</span></span><span><i class="bi bi-arrow-down-short"></i></span></a>
                            <ul class="dropdown-menu">
                                <ul>
                                    <li><Link class="dropdown-item" to="/dataProtection"><i class="bi bi-chevron-right"></i><span>Data Protection Regulations</span></Link></li>
                                    <li><Link class="dropdown-item" to="/conditionParticipation"><i class="bi bi-chevron-right"></i><span>Conditions of Participation</span></Link></li>
                                    <li><Link class="dropdown-item" to="/privacyPolicy"><i class="bi bi-chevron-right"></i><span>Privacy Policy</span></Link></li>
                                    <li><Link class="dropdown-item" to="/imprint"><i class="bi bi-chevron-right"></i><span>Imprint</span></Link></li>
                                </ul>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/contact"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">Contact Us</span></span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/news"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">News</span></span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about"><span className='navbar_arrow'><i class="bi bi-arrow-down-right-circle"></i><span className="navbar_text">About Us</span></span></Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;



