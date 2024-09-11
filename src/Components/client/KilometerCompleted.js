import React from "react";

const KilometerCompleted = () => {
  return (
    <>
      <section id="section-fun-facts" class="bg-color text-light">
        <div class="container">
          <div class="row g-custom-x force-text-center">
            <div class="col-md-3 col-sm-6 mb-sm-30">
              <div class="de_count wow fadeInUp">
                <h3 class="timer" data-to="15425" data-speed="3000">
                  0
                </h3>
                {/* <i className="fa-solid fa-road fa-2x"></i> */}
                Kilometers Completed
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-sm-30">
              <div class="de_count wow fadeInUp">
                <h3 class="timer" data-to="8745" data-speed="3000">
                  0
                </h3>
                {/* <i className="fas fa-smile fa-2x"></i> */}
                Happy Customers
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-sm-30">
              <div class="de_count wow fadeInUp">
                <h3 class="timer" data-to="235" data-speed="3000">
                  0
                </h3>
                {/* <i className="fa fa-calendar-alt fa-2x"></i> */}
                Years of Journey
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-sm-30">
              <div class="de_count wow fadeInUp">
                <h3 class="timer" data-to="15" data-speed="3000">
                  0
                </h3>
                {/* <i className="fas fa-map-location-dot fa-2x"></i> */}
                Destinations
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KilometerCompleted;
