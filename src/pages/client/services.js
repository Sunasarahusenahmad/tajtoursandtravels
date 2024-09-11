import React from 'react';
import Header from "../../Layouts/client/Header";
import Footer from "../../Layouts/client/Footer";
import CallWhatsapp from '../../Components/client/CallWhatsapp';

const Services = () => {
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
                    <h1>Our Services</h1>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Services Section --> */}
          <section className="services-section py-5">
            <div className="container">
            <h2 className="text-center pb30">Explore the Our best services</h2>
              <div className="row">
                {/* Service 1 */}
                <div className="col-md-4 mb-4">
                  <div className="service-box text-center p-4 shadow-sm bg-grey rounded-3 overflow-hidden">
                    <i className="fa fa-car de-icon service-icon mb-3"></i>
                    <h3>One Way & Round Trip</h3>
                    <p>
                      Offering one-way and round-trip taxi services across all selected states.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 mb-4">
                  <div className="service-box text-center p-4 shadow-sm bg-grey rounded-3 overflow-hidden">
                    <i className="fa fa-plane de-icon service-icon mb-3"></i>
                    <h3>Airport Taxi Service</h3>
                    <p>
                      Reliable airport taxi services in Gujarat, Maharashtra, Rajasthan and MP.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 mb-4">
                  <div className="service-box text-center p-4 shadow-sm bg-grey rounded-3 overflow-hidden">
                    <i className="fa fa-star de-icon service-icon mb-3"></i>
                    <h3>Celebration & Luxury Car</h3>
                    <p>
                      Premium and luxurious cars available for special events and celebrations.
                    </p>
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

export default Services;