import React from 'react'
import Header from "../../Layouts/client/Header"
import Footer from "../../Layouts/client/Footer"
import CallWhatsapp from '../../Components/client/CallWhatsapp'

const contact = () => {
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
									<h1>Contact Us</h1>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>

            <section aria-label="section">
                <div class="container">
					<div class="row g-custom-x">
						<div class="col-lg-8 mb-sm-30">
                            <h3>Do you have any question?</h3>
                            <form name="contactForm" id="contact_form" className="form-border" method="post">
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>Name :</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>Contact Number :</label>
                                        <input
                                            type="tel"
                                            maxLength={10}
                                            name="contact"
                                            id="contact"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="field-set">
                                        <label>Address :</label>
                                        <textarea
                                            rows={4}
                                            name="address"
                                            id="address"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>From :</label>
                                        <input
                                            type="text"
                                            name="from"
                                            id="from"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>To :</label>
                                        <input
                                            type="text"
                                            name="to"
                                            id="to"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>Date :</label>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="field-set">
                                        <label>Time :</label>
                                        <input
                                            type="time"
                                            name="time"
                                            id="time"
                                            class="form-control"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div id="submit" class="pull-left">
                                        <input
                                            type="submit"
                                            id="send_message"
                                            value="Send Message"
                                            class="btn-main color-2"
                                        />
                                        </div>
                                    </div>
                                    </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="de-box">
                                    <h4>IN Office</h4>
                                    <address class="s1">
                                        <span><i class="id-color fa fa-location-dot fa-lg"></i>Chhapi, Pirojpura Road, Super Complex</span>
                                        <span><i class="id-color fa fa-phone fa-lg"></i><a href="tel:+91 79872 44428">+91 79872 44428</a></span>
                                        <span><i class="id-color fa fa-phone fa-lg"></i><a href="tel:+91 99257 15013">+91 99257 15013</a></span>
                                        <span><i class="id-color fa fa-envelope fa-lg"></i><a href="mailto:tajtoursandtravels@contact.com">tajtoursandtravels@contact.com</a></span>
                                    </address>
                            </div>
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
      <CallWhatsapp/>
    </>
  )
}

export default contact