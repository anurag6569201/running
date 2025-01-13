import React from 'react';
import Footer from '../home/footer';

const dataProtectionInfo = [
  {
    title: "Data Collection",
    content: "We collect personal data, including but not limited to your name, contact details, and any other information provided during registration. We also capture photographs and videos during events."
  },
  {
    title: "Data Usage",
    content: "Your personal data will be used to process your registration, communicate with you about the event, and provide you with relevant information."
  },
  {
    title: "Data Storage",
    content: "Your personal data will be stored securely and retained only for as long as necessary to fulfill the purposes outlined in this policy."
  },
  {
    title: "Data Sharing",
    content: "We may share your personal information with third parties involved in organizing the Athletics Talent Hunt (AKC) event, but only to the extent necessary to support event operations."
  },
  {
    title: "Data Rights",
    content: "You have the right to access, correct, and delete your personal information at any time. For more details, please contact us."
  }
];

function DataProtection() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1>Data Privacy Disclaimer</h1>
            <p>By registering for and participating in the Athletics Talent Hunt (AKC), you agree to the collection, use, and processing of your personal information as described below:</p>
          </div>

          {dataProtectionInfo.map((item, index) => (
            <div key={index} className="col-md-8 mt-4">
              <div className="dpc_data_show shadow_v1">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DataProtection;
