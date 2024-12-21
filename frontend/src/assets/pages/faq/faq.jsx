import React from 'react';
import '../../css/faq/faq.css';
import Footer from '../home/footer';
import DesignBar from '../home/design_bar';

const faqItems = [
  {
    id: "One",
    title: "Requirements of an Athletics Kids Cup",
    content: "List of requirements and details about organizing the Athletics Kids Cup.",
  },
  {
    id: "Two",
    title: "Advantages of organising an Athletics Kids Cup",
    content: "Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.",
  },
  {
    id: "Three",
    title: "Advantages of organising an Athletics Kids Cup",
    content: "Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.",
  },
  {
    id: "Four",
    title: "Advantages of organising an Athletics Kids Cup",
    content: "Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.",
  },
  {
    id: "Five",
    title: "Advantages of organising an Athletics Kids Cup",
    content: "Benefits of organizing an Athletics Kids Cup, including health, teamwork, and fun.",
  },
];

function FAQ() {
  return (
    <>
      <div className="container-fluid mt-5 mb-5 faq_wrapper_container">
        <div className="row how_work_wrapper_row faq_wrapper_row justify-content-center">
          <div className="col-md-12">
            <h1>FAQ</h1>
          </div>
          <div className="row justify-content-center gy-3 faq-row_sdsfsd">
            <div className="col-md-8">
              <div className="accordion" id="kidsCupAccordion">
                {faqItems.map((item) => (
                  <div className="accordion-item shadow_v1 border-0" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className="custom-btn accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${item.id}`}
                      >
                        <span className="icon_dropdown shadow_v1">
                          <i className="bi bi-arrow-down-right-circle-fill"></i>
                        </span>
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#kidsCupAccordion"
                    >
                      <div className="accordion-body">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesignBar />
      <Footer />
    </>
  );
}

export default FAQ;
