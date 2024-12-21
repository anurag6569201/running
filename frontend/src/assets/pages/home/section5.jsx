import React from 'react';
import "../../css/home/section5.css";

function Section5() {

    return (
        <>
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
                                <span className='mt-3' type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Pre-register<br />your school</span>
                                <span class="up-arrow">↑</span>
                            </div>
                        </button>

                        <span class="star star-1">✦</span>
                        <span class="star star-2">✦</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section5;
