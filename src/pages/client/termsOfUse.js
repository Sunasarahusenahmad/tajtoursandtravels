import React from 'react';
import Header from "../../Layouts/client/Header";
import Footer from "../../Layouts/client/Footer";
import CallWhatsapp from '../../Components/client/CallWhatsapp';

const termsOfUse = () => {
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
                    <h1>Terms of Use</h1>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Services Section --> */}
          <section className="services-section py-5">
            <div className="container">
              <h3>Terms</h3>
              <p>Welcome to <a href="tajtoursandtravels.com">Taj Tours and Travels</a>. By accessing and using our website, you agree to comply with the following terms and conditions. Please read these carefully before using our services.</p>

              <h3>1. General Information</h3>
              <p>Taj Tours and Travels ("we," "our," or "us") operates as a car rental service provider across selected regions in India. These terms apply to all users, including customers, visitors, and any others who access or use our services.</p>

              <h3>2. Booking and Payment Policy</h3>
              

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

export default termsOfUse;