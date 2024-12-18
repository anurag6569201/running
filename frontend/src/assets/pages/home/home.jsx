import React, { useRef } from 'react';
import "../../css/home/home.css";

function Home() {
    const videoRef = useRef(null);
    const playButtonRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                playButtonRef.current.style.display = 'none';
            } else {
                videoRef.current.pause();
                playButtonRef.current.style.display = 'flex';
            }
        }
    };

    return (
        <>
            <div className="container">
                <div className="text-center my-5">
                    <div className="d-flex justify-content-center mb-3">
                        <span className="badge-news">BREAKING NEWS</span>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="arrow start-0">
                                <img src="images/home/arrow.png" alt="Arrow" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="headline">
                                <span>Neeraj</span> joins the team!
                            </h1>
                            <p className="text-muted">
                                'The Athletics Kids Cup is a project close to my heart, and I'm proud to
                                be part of it. Come, join us, and help make it a success!'
                            </p>
                        </div>
                        <div className="col-md-2">
                            <div className="wow-text">
                                <img src="images/home/wow.png" alt="Wow Text" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="my-4">
                                <a href="#" className="custom-button shadow_v1">To the news →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video_container_wrapper">
                    <div className="video-container shadow_v1">
                        <video
                            id="video"
                            ref={videoRef}
                            poster="poster.png"
                            controls
                        >
                            <source src="your-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div
                            className="play-button"
                            id="playButton"
                            ref={playButtonRef}
                            onClick={handlePlayPause}
                            style={{ display: 'flex' }}
                        >
                            <img src="images/home/play.png" alt="Play Button" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row athelate_row_wrapper">
                        <div className="col-md-5">
                            <div className="d-flex justify-content-left mb-3">
                                <span className="badge-news">BREAKING NEWS</span>
                            </div>
                            <h1 class="title mt-3">
                                Running <span>*</span> Jumping <br/> Throwing
                            </h1>
                            <p class="description">
                                The Athletics Kids Cup moves the kids! The three basic movement forms that are required in almost every sport are the basis of this unique sports initiative in India. Let's move the children together and encourage their personal development.
                            </p>
                            <button class="custom-button shadow_v1">Pre-register your school →</button>
                        </div>
                        <div className="col-md-5 athelate_image_wrapper">
                            <img className='athelate_image' src="images/home/athelate.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="design_bar">
                <img src="images/home/border.png" alt="" />
            </div>
            <div className="container-fluid mt-5">
                <div className="row how_work_wrapper_row">
                    <div className="col-md-12">
                        <h1>How it works</h1>
                    </div>
                    <div className="row main_work_wrapper">
                        <div className="col-md-5">
                        <div class="accordion" id="kidsCupAccordion">
                        <div class="accordion-item shadow_v1 border-0">
                            <h2 class="accordion-header" id="headingOne">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                            <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Requirements of an Athletics Kids Cup
                            </button>
                            </h2>
                            <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                List of requirements and details about organizing the Athletics Kids Cup.
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item shadow_v1 border-0">
                            <h2 class="accordion-header" id="headingTwo">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Advantages of organising an Athletics Kids Cup
                            </button>
                            </h2>
                            <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item shadow_v1 border-0">
                            <h2 class="accordion-header" id="headingThree">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Advantages of organising an Athletics Kids Cup
                            </button>
                            </h2>
                            <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item shadow_v1 border-0">
                            <h2 class="accordion-header" id="headingFour">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Advantages of organising an Athletics Kids Cup
                            </button>
                            </h2>
                            <div
                            id="collapseFour"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item shadow_v1 border-0">
                            <h2 class="accordion-header" id="headingFive">
                            <button
                                class="custom-btn accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                <span class="icon_dropdown shadow_v1"><i class="bi bi-arrow-down-right-circle-fill"></i></span>
                                Advantages of organising an Athletics Kids Cup
                            </button>
                            </h2>
                            <div
                            id="collapseFive"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#kidsCupAccordion"
                            >
                            <div class="accordion-body">
                                Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-5 accordion_image">
                            <img src="images/home/accordion.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 table_data_accordion">
                <div className="row table_data_accordion_row_wrapper">
                    <div className="col-md-3">
                        <div className="row table_accordion_wrapper_md-4">
                            <div className="col-md-12">
                                <img className='accordion_img-1' src="images/home/table_accordion_1.png" alt="" />
                            </div>
                            <div className="col-md-12 accordion_img-2_wrapper">
                                <img className='accordion_img-2' src="images/home/table_accordion_2.png" alt="" />
                            </div>
                            <h1 className='styled_table_accordion_text'>Season 1</h1>
                            <p>The Athletics Kids Cup is organised in age categories. There is one category per age group. There are rankings for girls and boys. The Athletics Kids Cup 2024/2025 is open to children who will be 15 years old or younger in 2024 (born in 2009 or later).</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div class="table-responsive shadow_v1">
                        <table class="table custom-table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Born in</th>
                                    <th scope="col">Girls</th>
                                    <th scope="col">Boys</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2009</td>
                                    <td>G15</td>
                                    <td>B15</td>
                                </tr>
                                <tr>
                                    <td>2010</td>
                                    <td>G14</td>
                                    <td>B14</td>
                                </tr>
                                <tr>
                                    <td>2011</td>
                                    <td>G13</td>
                                    <td>B13</td>
                                </tr>
                                <tr>
                                    <td>2012</td>
                                    <td>G12</td>
                                    <td>B12</td>
                                </tr>
                                <tr>
                                    <td>2013</td>
                                    <td>G11</td>
                                    <td>B11</td>
                                </tr>
                                <tr>
                                    <td>2014</td>
                                    <td>G10</td>
                                    <td>B10</td>
                                </tr>
                                <tr>
                                    <td>2015</td>
                                    <td>G9</td>
                                    <td>B9</td>
                                </tr>
                                <tr>
                                    <td>2016</td>
                                    <td>G8</td>
                                    <td>B8</td>
                                </tr>
                                <tr>
                                    <td>2017 and younger</td>
                                    <td>G7*</td>
                                    <td>B7</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <p className='mt-3'>* In the categories G7 and B7 also younger <br />children are allowed to start.</p>
                    </div>
                </div>
            </div>


            <div className="container boxes_wrapper_container mt-5">
                <div className="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col container_box_card-1">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box date">
                                    <h5 class="card-title">Date</h5>
                                    <p class="card-text">The Athletics Kids Cup season begins on 16 September 2024, from which date competitions can be held. All competitions held up to and including 10 December 2024 are part of the qualification period for the Regional Finals. Your school is free to organise an Athletics Kids Cup after 10 December. Of course, you will still receive our full support.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-2">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box point-system">
                                    <h5 class="card-title">Point system</h5>
                                    <p class="card-text">For the evaluation of the individual performances, a predefined points table is used. The points for the three individual disciplines are added to the triathlon result. Only the total of all three disciplines counts towards the ranking.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col container_box_card-3">
                            <div class="card">
                                <div class="card-body shadow_v1 info-box disciplines">
                                    <h5 class="card-title">Disciplines</h5>
                                    <p class="card-text">The Athletics Kids Cup is a triathlon consisting of the following disciplines:</p>
                                    <ul>
                                        <li>Sprint 60 m – 1 attempt</li>
                                        <li>Long jump with zone jump – 3 attempts</li>
                                        <li>Ball throw 200 g – 3 attempts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid ribbon_container_wrapper mt-5">
                <div className="row">
                    <div class="ribbon-container">
                        <div class="ribbon ribbon-blue">
                            <div class="scroll-text">
                                Success is not just about winning medals, it's about giving your best and never giving up.
                                Success is not just about winning medals, it's about giving your best and never giving up.
                            </div>
                        </div>

                        <div class="ribbon ribbon-green">
                            <div class="scroll-text-reverse">
                                #wemovethekids 😊 #wemovethekids 😊 #wemovethekids 😊 #wemovethekids 😊
                                #wemovethekids 😊 #wemovethekids 😊 #wemovethekids 😊 #wemovethekids 😊
                            </div>
                        </div>

                        <button class="register-button shadow_v1">
                            <div class="button-content">
                                <span className='mt-3'>Pre-register<br />your school</span>
                                <span class="up-arrow">↑</span>
                            </div>
                        </button>

                        <span class="star star-1">✦</span>
                        <span class="star star-2">✦</span>
                    </div>
                </div>
            </div>


            <div className="container-fluid types_container_wrapper">
            <div className="col-md-10">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card card_types h-100">
                    <img src="images/home/type1.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <span className='helper_title_text'>Our</span>
                        <h5 class="card-title">Commitment</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card_types h-100">
                    <img src="images/home/type2.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <span className='helper_title_text'>Your</span>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card_types h-100">
                    <img src="images/home/type3.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <span className='helper_title_text'>Shared</span>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            <div className="container">
            <div className="video_container_wrapper mt-5">
                <div className="video-container shadow_v1">
                    <video
                        id="video1"
                        ref={videoRef}
                        poster="poster.png"
                        controls
                    >
                        <source src="your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        className="play-button"
                        id="playButton"
                        ref={playButtonRef}
                        onClick={handlePlayPause}
                        style={{ display: 'flex' }}
                    >
                        <img src="images/home/play.png" alt="Play Button" />
                    </div>
                </div>
            </div>
            </div>


            <div className="container accodion_drops_wrapper mt-5">
                <h1 class="main-title">Want to know more about us?</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4 accordion accordion-flush mt-3" id="accordionFlushExample">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Accordion Item #4
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid contact_form_container">
                <div class="contact-form">
                    <div className="col-md-10">
                    <form className='form_details_contact shadow_v1'>
                    <h4 class="text-center mb-4">Contact Us</h4>

                        <div className="row">
                            <div className="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label required">Full name</label>
                                            <input type="text" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Phone</label>
                                            <input type="tel" class="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label required">Email Address</label>
                                            <input type="email" class="form-control" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label required">Subject</label>
                                            <input type="text" class="form-control" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label required">Message</label>
                                    <textarea class="form-control" required></textarea>
                                </div>
                            </div>
                            <span class="mandatory-text">* mandatory field</span>

                        </div>
                        

                        
                        <div class="d-flex justify-content-center align-items-center">
                            <button type="submit" class="btn btn-send shadow_v1">
                                Send message
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>




            <footer>
                <div class="footer-wrapper">
                    <div class="container">
                        <div class="footer-content">
                            <div className="footer_images_wrapper">

                                <span class="logo-section">
                                    <img src="images/home/logo.png" alt="Athletics Icon"/>
                                </span>
                                
                                <span>
                                    <span class="social-icons">
                                        <span class="flex space-x-1.5"><a href="https://www.linkedin.com/company/athletics-kids-cup/" class="cursor-pointer" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="58" fill="none"><g filter="url(#a)"><path fill="#0a66c2" d="M.1 27.849c0 14.912 12.088 27 27 27s27-12.088 27-27-12.088-27-27-27-27 12.088-27 27Z"></path><path stroke="#374151" stroke-width="1.35" d="M27.1 54.174C12.561 54.174.775 42.388.775 27.849c0-14.54 11.786-26.325 26.325-26.325S53.425 13.31 53.425 27.849 41.64 54.174 27.1 54.174Z"></path></g><path fill="#fff" d="M19.675 41.349h-5.737V23.292h5.737V41.35ZM16.806 20.76c-1.856 0-3.206-1.35-3.206-3.206 0-1.856 1.519-3.206 3.206-3.206 1.857 0 3.207 1.35 3.207 3.206 0 1.856-1.35 3.206-3.207 3.206ZM40.6 41.35h-5.737V31.56c0-2.869-1.182-3.712-2.87-3.712-1.687 0-3.374 1.35-3.374 3.88v9.62H22.88V23.292h5.4v2.532c.507-1.182 2.532-3.038 5.4-3.038 3.207 0 6.582 1.856 6.582 7.425V41.35h.337Z"></path><defs><filter id="a" width="55.296" height="56.592" x="0.1" y="0.849" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1.296" dy="2.592"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0 0.113725 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_621_2476"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_621_2476" result="shape"></feBlend></filter></defs></svg></a><a class="cursor-pointer" href="https://www.instagram.com/athleticskidscupindia/?igsh=MWx3ZGFhdGJrZjA2aw%3D%3D" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="57" height="58" fill="none"><defs><linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f58529"></stop><stop offset="25%" stop-color="#f77737"></stop><stop offset="50%" stop-color="#d84a87"></stop><stop offset="75%" stop-color="#a74eeb"></stop><stop offset="100%" stop-color="#6a57d7"></stop></linearGradient></defs><g filter="url(#a)"><path fill="url(#instagramGradient)" d="M.9 27.849c0 14.912 12.088 27 27 27s27-12.088 27-27-12.088-27-27-27c-14.911 0-27 12.088-27 27Z"></path><path stroke="#374151" stroke-width="1.35" d="M27.9 54.174c-14.539 0-26.325-11.786-26.325-26.325S13.361 1.524 27.9 1.524 54.225 13.31 54.225 27.849 42.44 54.174 27.9 54.174Z"></path></g><path fill="#fff" d="M27.9 16.373h5.738c1.35 0 2.025.338 2.53.506.676.338 1.182.507 1.688 1.013.506.506.844 1.012 1.013 1.687.169.507.337 1.182.506 2.532V33.586c0 1.35-.337 2.025-.506 2.53-.338.676-.507 1.182-1.013 1.688-.506.507-1.012.844-1.687 1.013-.506.169-1.181.337-2.531.506H22.163c-1.35 0-2.026-.337-2.532-.506-.675-.338-1.181-.506-1.687-1.013-.506-.506-.844-1.012-1.013-1.687-.169-.506-.337-1.181-.506-2.531V22.11c0-1.35.337-2.025.506-2.532.338-.675.506-1.18 1.013-1.687.506-.506 1.012-.844 1.687-1.013.506-.168 1.181-.337 2.532-.506H27.9Zm0-2.531h-5.737c-1.52 0-2.532.337-3.375.675a7.369 7.369 0 0 0-2.532 1.687c-.844.844-1.181 1.52-1.687 2.532-.338.843-.507 1.856-.675 3.375V33.586c0 1.518.337 2.53.675 3.375a7.368 7.368 0 0 0 1.687 2.53c.844.845 1.519 1.182 2.532 1.688.843.338 1.856.507 3.375.675H33.638c1.518 0 2.53-.337 3.375-.675a7.368 7.368 0 0 0 2.53-1.687c.845-.844 1.182-1.519 1.688-2.531.338-.844.506-1.857.675-3.375V22.11c0-1.52-.337-2.532-.675-3.375a7.37 7.37 0 0 0-1.687-2.532c-.844-.843-1.519-1.18-2.531-1.687-.844-.338-1.857-.506-3.375-.675H27.9Z"></path><path fill="#fff" d="M27.9 20.592c-4.05 0-7.256 3.206-7.256 7.256 0 4.05 3.206 7.256 7.256 7.256 4.05 0 7.256-3.206 7.256-7.256 0-4.05-3.206-7.256-7.256-7.256Zm0 11.981c-2.531 0-4.725-2.025-4.725-4.725 0-2.531 2.025-4.725 4.725-4.725 2.531 0 4.725 2.025 4.725 4.725 0 2.531-2.194 4.725-4.725 4.725ZM35.325 22.11a1.687 1.687 0 1 0 0-3.374 1.687 1.687 0 0 0 0 3.375Z"></path><defs><filter id="a" width="55.296" height="56.592" x="0.9" y="0.849" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1.296" dy="2.592"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0 0.113725 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_621_2479"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_621_2479" result="shape"></feBlend></filter></defs></svg></a><a class="cursor-pointer" href="https://www.youtube.com/@AthleticsKidsCup" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="57" height="58" fill="none"><g filter="url(#a)"><path fill="#FF0000" d="M.9 27.849c0 14.912 12.088 27 27 27s27-12.088 27-27-12.088-27-27-27c-14.911 0-27 12.088-27 27Z"></path><path stroke="#374151" stroke-width="1.35" d="M27.9 54.174c-14.539 0-26.325-11.786-26.325-26.325S13.361 1.524 27.9 1.524 54.225 13.31 54.225 27.849 42.44 54.174 27.9 54.174Z"></path></g><g transform="translate(3.5, 2.5)"><path d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z" id="Shape" fill="#fff"></path></g><rect x="120" width="100" height="100" rx="15"></rect><defs><filter id="a" width="55.296" height="56.592" x="0.9" y="0.849" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1.296" dy="2.592"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0 0.113725 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_621_2479"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_621_2479" result="shape"></feBlend></filter></defs></svg></a><a class="cursor-pointer" href="https://www.facebook.com/profile.php?id=61568428298237" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="57" height="58" fill="none"><g filter="url(#a)"><path fill="#2774AE" d="M.9 27.849c0 14.912 12.088 27 27 27s27-12.088 27-27-12.088-27-27-27c-14.911 0-27 12.088-27 27Z"></path><path stroke="#374151" stroke-width="1.35" d="M27.9 54.174c-14.539 0-26.325-11.786-26.325-26.325S13.361 1.524 27.9 1.524 54.225 13.31 54.225 27.849 42.44 54.174 27.9 54.174Z"></path></g><g transform="scale(1.25)"><path fill="#fff" d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"></path></g><defs><filter id="a" width="55.296" height="56.592" x="0.9" y="0.849" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1.296" dy="2.592"></feOffset><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.0784314 0 0 0 0 0.113725 0 0 0 1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_621_2479"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_621_2479" result="shape"></feBlend></filter></defs></svg></a></span>
                                    </span>
                                </span>
                                
                            </div>

                            
 
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    © 2024 anurag.icu All rights reserved.
                </div>
            </footer>
            

        </>
    );
}

export default Home;
