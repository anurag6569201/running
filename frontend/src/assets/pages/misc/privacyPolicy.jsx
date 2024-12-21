import React from 'react';
import Footer from '../home/footer';

const privacyPolicySections = [
  {
    title: "Data Collection",
    content: "We collect personal data, including but not limited to your name, contact details, and any other information provided during registration. We also capture photographs and videos during events."
  },
  {
    title: "Use of Personal Information",
    content: "We use the collected personal data to improve user experience, personalize services, send promotional content, and for any other lawful purpose in line with this Privacy Policy."
  },
  {
    title: "Sharing of Information",
    content: "We may share your personal information with third parties for the purpose of processing your requests, providing services, or in compliance with legal obligations."
  },
  {
    title: "Data Security",
    content: "We take appropriate measures to secure your personal information and prevent unauthorized access, alteration, or destruction of the data we collect."
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information at any time by contacting us directly. You may also choose to withdraw consent for certain uses of your data."
  }
];

function PrivacyPolicy() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-left">
            <h1 className='text-center'>Privacy Policy</h1>
            <p>Dspowerparts GmbH ("DSPP") recognizes that its visitors, users, and others who use www.athleticskidscup.com value their privacy. This Privacy Policy details important information regarding the use and disclosure of user information collected via the www.athleticskidscup.com website. This Privacy Policy helps you make an informed decision about whether to use or continue using www.athleticskidscup.com. Your use of www.athleticskidscup.com and any personal information/personal data you provide on www.athleticskidscup.com remains subject to the terms of this Privacy Policy and our Terms & Conditions elsewhere on this site.</p>
            <p>DSPP is the owner of www.athleticskidscup.com ("Website"). DSPP can be contacted by mail at "dspowerparts GmbH, Feldhof 11, 66300 Zug, Switzerland" or by e-mail at info@dspowerparts.ch. This online privacy policy discloses DSPP's information practices for this Website and Services (as defined below) including the type of information being collected, method of such information collection, use of such information and with sharing of such information with third parties. "Services" herein shall refer to services provided by DSPP or indirectly on behalf of DSPP's licensee's / marketing affiliates which encompasses the games and networking services of www.athleticskidscup.com being made available over the Website, cellular phones or any other similar electronic devices and IPTV accessed through any form or medium whatsoever, including but not limited to, internet, short message services and data networks.</p>
            <p className='text-center'>PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY</p>
            <p className='text-center mb-5'>PERSONAL INFORMATION THAT MAY BE COLLECTED</p>
          </div>

          {privacyPolicySections.map((section, index) => (
            <div key={index} className="col-md-8 mt-4">
              <div className="dpc_data_show shadow_v1">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
