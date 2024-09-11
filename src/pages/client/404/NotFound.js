import React from 'react'
import Header from "../../../Layouts/client/Header"
import Footer from "../../../Layouts/client/Footer"
import CallWhatsapp from '../../../Components/client/CallWhatsapp'

const NotFound = () => {
  return (
    <>
      <div id="wrapper">
      {/* <!-- content begin --> */}
        <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" class="jarallax text-light pt50 pb50 vertical-center" aria-label="section">
                <img src="assets/images/background/notfound-bg-img.jpg" class="jarallax-img" alt="" />
                <div class="container">
                    <div class="row align-items-center">
                        <div className="col-lg-6">
                          <h1>Oops! You're off the map.</h1>
                          <p class="text-white">
                            It looks like you've wandered off the beaten path, and this page is
                            nowhere to be found. But don't worry, we’re here to guide you back on
                            track!
                          </p>
                          <a href="/" className="btn-main">
                            Go Back
                          </a>
                          <div className="spacer-20"></div>
                          <ul className="list-unstyled text-white">
                            <li>
                              Head back to our <a href="/" style={{ color: '#1ECB15' }}>Homepage</a> to plan your next adventure.
                            </li>
                            <li>
                              Explore our <a href="/services" style={{ color: '#1ECB15' }}>Destinations</a> for exciting travel ideas.
                            </li>
                            <li>
                              Or, feel free to <a href="/contact" style={{ color: '#1ECB15' }}>Contact Us</a>—our team is ready to help!
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-6 text-center">
                            <h1 class="s2">
                                <span class="c1 not-found-text">404</span>
                                <span class="spacer-single"></span>
                                <span class="c3">Not Found</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        {/* <!-- content close --> */}
      </div>
      <CallWhatsapp/>
    </>
  )
}

export default NotFound