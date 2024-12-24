import React from 'react';
import "../../css/home/section3.css";

function Section3() {

    return (
        <>
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
                            <p>The Sports Kid Talent Hunt is organized into age categories, with one category per age group. Separate rankings are maintained for girls and boys. The 2024/2025 Talent Hunt is open to children aged 15 or younger in 2024 (born in 2009 or later).</p>
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
                                    <td>2017</td>
                                    <td>G7</td>
                                    <td>B7</td>
                                </tr>
                                <tr>
                                    <td>2018 and younger</td>
                                    <td>G6*</td>
                                    <td>B6</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <p className='mt-3'>* In the categories G7 and B7 also younger <br />children are allowed to start.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section3;
