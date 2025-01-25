import React from 'react';
import Footer from '../home/footer';

const participationConditions = [
  {
    title: "Data Collection",
    content: "We collect personal data, including but not limited to your name, contact details, and any other information provided during registration. We also capture photographs and videos during events."
  },
  {
    title: "Eligibility",
    content: "To participate in the Kids Talent Hunt (KTH), you must meet the eligibility criteria, including age requirements, medical clearance, and parental consent."
  },
  {
    title: "Event Participation",
    content: "Participants must follow the event's rules and regulations and must not engage in any form of unsportsmanlike behavior during the competition."
  },
  {
    title: "Liability",
    content: "By participating in the Kids Talent Hunt (KTH), you acknowledge and agree that the event organizers are not responsible for any accidents or injuries that may occur during the event."
  },
  {
    title: "Consent",
    content: "By registering, you consent to the use of your personal data and images in accordance with the event's privacy policy and terms of service."
  }
];

function ConditionParticipation() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1>Conditions of Participation</h1>
            <p>By registering for and participating in the Kids Talent Hunt (KTH), you agree to the terms and conditions outlined below:</p>
          </div>

          {participationConditions.map((item, index) => (
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

export default ConditionParticipation;
