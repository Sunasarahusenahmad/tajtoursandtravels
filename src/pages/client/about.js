import React from 'react'
import Header from "../../Layouts/client/Header"
import Footer from "../../Layouts/client/Footer"
import KilometerCompleted from '../../Components/client/KilometerCompleted'
import CallWhatsapp from '../../Components/client/CallWhatsapp'

const about = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- header begin --> */}
            <Header />
        {/* <!-- header close --> */}

        {/* <!-- content begin --> */}
        <div class="no-bottom no-top zebra" id="content">
            <div id="top"></div>
            {/* <!-- section begin --> */}
            <section id="subheader" class="jarallax text-light">
                    <div class="center-y relative text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
									<h1>About Us</h1>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>

            <section>
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInRight">
                            <h2>We offer customers a wide range of <span class="id-color">commercial cars</span> and <span class="id-color">luxury cars</span> for any occasion.</h2>
                        </div>
                        <div class="col-lg-6 wow fadeInRight" data-wow-delay=".25s">
                            At Rentaly, we are dedicated to providing exceptional car rental services to our valued customers. With a commitment to quality, convenience, and customer satisfaction, we strive to make every rental experience a seamless and enjoyable one. We understand that every customer has unique needs and preferences when it comes to renting a car. That's why we maintain a diverse fleet of well-maintained vehicles to cater to various requirements. From compact cars for solo travelers to spacious SUVs for families, we have a wide range of options to choose from.
                        </div>
                    </div>
                    <div class="spacer-double"></div>
                </div>
                <KilometerCompleted />
            </section>

            <section aria-label="section" class="bg-white">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 offset-lg-3 text-center">
                            <h2>Features Highlight</h2>
                            <div class="spacer-20"></div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-lg-3">
                            <div class="box-icon s2 p-small mb20 wow fadeInRight" data-wow-delay=".5s">
                                <i class="fa bg-color fa-trophy"></i>
                                <div class="d-inner">
                                    <h4>First class services</h4>
                                    Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.
                                </div>
                            </div>
                            <div class="box-icon s2 p-small mb20 wow fadeInL fadeInRight" data-wow-delay=".75s">
                                <i class="fa bg-color fa-road"></i>
                                <div class="d-inner">
                                    <h4>24/7 road assistance</h4>
                                     Reliable support when you need it most, keeping you on the move with confidence and peace of mind.
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <img src="assets/images/misc/car.png" alt="" class="img-fluid wow fadeInUp" />
                        </div>

                        <div class="col-lg-3">
                            <div class="box-icon s2 d-invert p-small mb20 wow fadeInL fadeInLeft" data-wow-delay="1s">
                                <i class="fa bg-color fa-tag"></i>
                                <div class="d-inner">
                                    <h4>Quality at Minimum Expense</h4>
                                     Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value.
                                </div>
                            </div>
                            <div class="box-icon s2 d-invert p-small mb20 wow fadeInL fadeInLeft" data-wow-delay="1.25s">
                                <i class="fa bg-color fa-map-pin"></i>
                                <div class="d-inner">
                                    <h4>Free Pick-Up & Drop-Off</h4>
                                     Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-img-with-tab">
                <div class="container">
                    <div class="row align-items-center">
                    <div class="col-lg-5 offset-lg-7">
                        <h2>Exclusively for Quality-Conscious Clients</h2>
                        <div class="spacer-20"></div>
                        <p>Our commitment to excellence is reflected in every aspect of our service, curated specifically for those who demand nothing but the best. We provide a selection of high-end vehicles that represent the pinnacle of quality, ensuring a premium experience that meets your exacting standards. Whether it's the refined elegance of luxury sedans or the robust capabilities of top-tier SUVs, our offerings are designed to impress and deliver unparalleled satisfaction.</p>
                    </div>
                    </div>
                </div>
                <div class="image-container col-md-6 pull-right" style={{backgroundImage: `url(/assets/images/background/client-bg-img.jpg)`, backgroundPosition: "center"}}></div>
            </section>

            <section id="section-call-to-action" class="bg-color-2 pt60 pb60 text-light mt90" style={{background:'#179510'}}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h2 class="s2">Call us for further information. Taj Tours & Travels customer care is here to help you anytime.</h2>
                        </div>

                        <div class="col-lg-4 text-lg-center text-sm-center">
                            <div class="phone-num-big">
                                <i class="fa fa-phone"></i>
                                <span class="pnb-text">
                                    Call Us Now
                                </span>
                                <span class="pnb-num">
                                +91 79872 44428
                                </span>
                            </div>
                            <a href="/contact" class="btn-main">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}
        </div>
        {/* <!-- content close --> */}


        {/* <!-- footer begin --> */}
            <Footer />
        {/* <!-- footer close --> */}
      </div>
      <CallWhatsapp />

    </>
  )
}

export default about