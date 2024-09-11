import React from 'react';
import Header from "../../Layouts/client/Header";
import Footer from "../../Layouts/client/Footer";
import CallWhatsapp from '../../Components/client/CallWhatsapp';
import BookForm from '../../Components/client/BookForm';

const carDetails = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- header begin --> */}
        <Header />
        {/* <!-- header close --> */}

        {/* <!-- content begin --> */}
        <div className="no-bottom no-top zebra" id="content">
          <div id="top"></div>

          {/* <!-- section begin --> */}
          <section id="subheader" className="jarallax text-light">
            <div className="center-y relative text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1>Car Details</h1>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </section>

          <section id="section-car-details">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6">
                            <div id="slider-carousel" class="owl-carousel">
                                <div class="item">
                                    <img src="assets/images/car-single/1.jpg" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="assets/images/car-single/2.jpg" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="assets/images/car-single/3.jpg" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="assets/images/car-single/4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <h3>Car Name</h3>
                            <div class="de-spec">
                                <div class="d-row">
                                    <span class="d-title">Seats : </span>
                                    <span class="d-value">8 Seats</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Minimum Kilometers : </span>
                                    <span class="d-value">300 KM</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Night Stay : </span>
                                    <span class="d-value">N/A</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Parking : </span>
                                    <span class="d-value">Paid by customer if applicable</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Airport Charges : </span>                                    
                                    <span class="d-value">Paid by customer if applicable</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Tall Tax : </span>
                                    <span class="d-value">Paid by customer if applicable</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Driver Allowance : </span>
                                    <span class="d-value">Paid by Customer</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Border Tax : </span>
                                    <span class="d-value">If Applicable</span>
                                </div>
                                <div class="d-row">
                                    <span class="d-title">Smoking & Drink : </span>
                                    <span class="d-value">Not Allow</span>
                                </div>
                            </div>
                            <div class="spacer-single"></div>
                            
                            <p class="btn-main"
                              data-bs-toggle="modal"
                              data-bs-target="#scrollableModal">Book Now</p>
                            <div class="col-md-4 mb60">
                              {/* Book Form Modal */}
                              <div
                                class="modal fade"
                                id="scrollableModal"
                                data-bs-keyboard="false"
                                tabindex="-1"
                                aria-labelledby="scrollableModalLabel"
                                aria-hidden="true"
                              >
                                  <BookForm title={"Contact Now"} btn={"Close"} />
                              </div>
                            </div>
                        </div>
                      </div>
                </div>
            </section>
        </div>
        {/* <!-- content close --> */}

        {/* <!-- footer begin --> */}
        <Footer />
        {/* <!-- footer close --> */}
      </div>
      <CallWhatsapp />
    </>
  );
};

export default carDetails;