import React from 'react';
import Section3 from '../home/section3';
import Section4 from '../home/section4';
import Footer from '../home/footer';

function RulesCategory() {
  return (
    <>
    <Section3/>
    <Section4/>
    <br /><br />
    <div className="container mb-5">
      <div className="row justify-content-center">
        <a href="document/sample.pdf" target='_blank' style={{textDecoration:'none',color:'#fff',width:'fit-content'}}><span className='rules_category_btn'>Handbook And Regulations <i class="bi bi-arrow-up-right"></i></span></a>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default RulesCategory;
