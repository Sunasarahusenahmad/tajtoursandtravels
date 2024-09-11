import React from "react";

const footer = () => {
  return (
    <>
      <footer class="text-light">
        <div class="container">
          <div class="row g-custom-x">
            <div class="col-lg-3">
              <div class="widget">
                <h5>About Taj Tours & Travels</h5>
                <p>
                At Taj Tours & Travels, we believe that exceptional travel experiences shouldn't come with a hefty price tag. Where quality meets affordability, we offer curated travel services that allow you to explore your dream destinations in comfort and style, without breaking the bank.
                </p>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="widget">
                <h5>Contact Info</h5>
                <address class="s1">
                  <span>
                    <i class="id-color fa fa-location-dot"></i><a href="">Chhapi, Pirojpura Road, Super Complex</a>
                  </span>
                  <span>
                    <i class="id-color fa fa-phone fa-lg"></i><a href="tel:+91 79872 44428">+91 79872 44428</a>
                  </span>
                  <span>
                    <i class="id-color fa fa-phone fa-lg"></i><a href="tel:+91 99257 15013">+91 99257 15013</a>
                  </span>
                  <span>
                    <i class="id-color fa-regular fa-envelope fa-lg"></i>
                    <a href="mailto:contact@example.com">tajtoursandtravels@contact.com</a>
                  </span>
                </address>
              </div>
            </div>

            <div class="col-lg-3">
              <h5>Quick Links</h5>
              <div class="row">
                <div class="col-lg-6">
                  <div class="widget">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/services">Services</a>
                      </li>
                      <li>
                        <a href="/cars">Our Cars</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="widget">
                <h5>Social Network</h5>
                <div class="social-icons">
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>{" "}
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-pinterest"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-rss"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="subfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex">
                  <div class="de-flex-col">
                    <a href="index.html">
                      Copyright 2024 - Rentaly by Designesia
                    </a>
                  </div>
                  <ul class="menu-simple">
                    <li>
                      <a href="/terms-of-use">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
