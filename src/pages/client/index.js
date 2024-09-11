import React from "react";
import Header from "../../Layouts/client/Header"
import Footer from "../../Layouts/client/Footer"
import CallWhatsapp from "../../Components/client/CallWhatsapp"
import Cars from "../../Components/client/Cars"
import Testimonials from "../../Components/client/Testimonials"
import KilometerCompleted from "../../Components/client/KilometerCompleted"
import TouristPlaces from "../../Components/client/TouristPlaces"
import CarList from "../../Components/client/CarList"
import BookForm from "../../Components/client/BookForm"

const index = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- page preloader begin --> */}
        {/* <div id="de-preloader"></div> */}
        {/* <!-- page preloader close --> */}

        {/* <!-- header begin --> */}
        <Header />
        {/* <!-- header close --> */}

        {/* <!-- content begin --> */}
        <div class="no-bottom no-top" id="content">
          <div id="top"></div>
          <section
            id="section-hero"
            aria-label="section"
            class="full-height vertical-center"
            style={{
              backgroundImage: `url(/assets/images/background/banner-bg-img.jpg)`,
              backgroundPosition: "bottom",
            }}
          >
            <div class="container">
              <div class="row align-items-center">
                <div class="spacer-double sm-hide"></div>
                <div class="col-lg-6">
                  <h4>
                    <span class="id-color">Plan Your Journey with Ease </span>
                  </h4>
                  <div class="spacer-10"></div>
                  <h1>
                    Discover India’s rich diversity with the comfort of our
                    rental cars
                  </h1>
                  <p class="lead">
                    Our fleet of cars offers not only exceptional comfort but
                    also peace of mind as you journey through India’s diverse
                    terrains—from hilly roads to coastal highways. Whether
                    you're on a weekend getaway or a business trip, we have the
                    right vehicle for you.
                  </p>
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

                <div class="col-lg-6">
                  <img
                    src="/assets/images/misc/car-2.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <Cars />

          <section id="section-img-with-tab" data-bgcolor="#f8f8f8">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-5 offset-lg-7">
                  <h2>Exclusively for Discerning Indian Drivers</h2>
                  <div class="spacer-20"></div>
                  <p>
                    At the heart of our service is a collection of top-tier
                    vehicles, chosen to meet the high standards and unique
                    preferences of our Indian clients. From the elegance of
                    luxury sedans to the robustness of premium SUVs, we offer an
                    unparalleled selection designed to deliver both style and
                    comfort.
                  </p>
                  <ul class="list-unstyled mx-2">
                    <li>
                      <i class="fa fa-check" style={{ color: "#1ecb15" }}></i>{" "}
                      Luxury Sedans: Elegant Sophistication
                    </li>
                    <li>
                      <i class="fa fa-check" style={{ color: "#1ecb15" }}></i>{" "}
                      Sports Cars: Thrilling Performance
                    </li>
                    <li>
                      <i class="fa fa-check" style={{ color: "#1ecb15" }}></i>{" "}
                      Premium SUVs: Versatile Comfort
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="image-container col-md-6 pull-right"
              style={{
                backgroundImage: `url(/assets/images/background/client-bg-img.jpg)`,
                backgroundPosition: "center",
              }}
            ></div>
          </section>

          <section>
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <h2>Discover Our Premium Car Services</h2>
                  <div class="spacer-20"></div>
                </div>
                <div class="col-md-3">
                  <i class="fa fa-car de-icon mb20"></i>
                  <h4>One-Way & Round Trip</h4>
                  <p>
                    Seamless travel options for one-way and round trips across
                    all selected states, ensuring comfort and convenience for
                    your journeys.
                  </p>
                </div>
                <div class="col-md-3">
                  <i class="fa fa-plane de-icon mb20"></i>
                  <h4>Airport Taxi Service</h4>
                  <p>
                    Reliable airport transfers in Gujarat, Maharashtra, and
                    select districts in Rajasthan and MP, designed for a smooth
                    travel experience.
                  </p>
                </div>
                <div class="col-md-3">
                  <i class="fa fa-gift de-icon mb20"></i>
                  <h4>Celebration & Luxury Service</h4>
                  <p>
                    Elevate your special occasions with our luxurious car
                    services, tailored for celebrations and high-end
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

          <TouristPlaces />

          <KilometerCompleted />

          <CarList />
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

export default index;
