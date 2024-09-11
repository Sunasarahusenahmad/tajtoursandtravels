import React from "react";
import BookForm from "./BookForm";
import CallWhatsapp from "./CallWhatsapp";

const Cars = () => {
  const vehicles = [
    {
      name: "Toyota Innova",
      imgSrc: "/assets/images/cars/toyota-innova.jpg",
      attributes: { seats: 7, doors: 4, type: "SUV" },
      minKM: 300,
    },
    {
      name: "Toyota Innova Crysta",
      imgSrc: "/assets/images/cars/toyota-innova-crysta.jpg",
      attributes: { seats: 7, doors: 4, type: "SUV" },
      minKM: 300,
    },
    {
      name: "Maruti Ertiga",
      imgSrc: "/assets/images/cars/maruti-ertiga.jpg",
      attributes: { seats: 7, doors: 4, type: "MUV" },
      minKM: 300,
    },
    {
      name: "Kia Carnes",
      imgSrc: "/assets/images/cars/kia-carnes.jpg",
      attributes: { seats: 7, doors: 4, type: "MUV" },
      minKM: 300,
    },
    {
      name: "Maruti Swift Dzire",
      imgSrc: "/assets/images/cars/maruti-swift-dzire.jpg",
      attributes: { seats: 5, doors: 4, type: "Sedan" },
      minKM: 300,
    },
    {
      name: "Hyundai Aura",
      imgSrc: "/assets/images/cars/hyundai-aura.jpg",
      attributes: { seats: 5, doors: 4, type: "Sedan" },
      minKM: 300,
    },
    {
      name: "Toyota Etios",
      imgSrc: "/assets/images/cars/toyota-etios.jpg",
      attributes: { seats: 5, doors: 4, type: "Sedan" },
      minKM: 300,
    },
    {
      name: "Tempo Traveler",
      imgSrc: "/assets/images/cars/tempo-traveler.jpg",
      attributes: { seats: 14, doors: 4, type: "Van" },
      minKM: 300,
    },
    {
      name: "Urbania",
      imgSrc: "/assets/images/cars/urbania.jpg",
      attributes: { seats: 17, doors: 4, type: "Van" },
      minKM: 300,
    },
  ];
  return (
    <>
      <section id="section-cars" class="no-top">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 offset-lg-3 text-center">
              <h2>Discover Our Premier Vehicle Collection</h2>
              <p>
                Choose from our curated selection of vehicles, each offering
                unique features and comfort. Whether you're navigating city
                streets or exploring new destinations, our fleet is designed to
                enhance your journey.
              </p>
              <div class="spacer-20"></div>
            </div>
            <div class="clearfix"></div>

            <div className="row pe-0">
              {vehicles.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 pe-0" key={index}>
                  <div className="de-item mb30">
                    <div className="d-img">
                      <img
                        src={item.imgSrc}
                        className="img-fluid"
                        alt={item.name}
                      />
                    </div>
                    <div className="d-info">
                      <div className="d-text">
                        <h4>{item.name}</h4>
                        <div className="d-atr-group">
                          <span className="d-atr">
                            <img
                              src="/assets/images/icons/1-green.svg"
                              alt="total seats"
                            />
                            {item.attributes.seats}
                          </span>
                          <span className="d-atr">
                            <img
                              src="/assets/images/icons/3-green.svg"
                              alt="total doors"
                            />
                            {item.attributes.doors}
                          </span>
                          <span className="d-atr">
                            <img
                              src="/assets/images/icons/4-green.svg"
                              alt="car type"
                            />
                            {item.attributes.type}
                          </span>
                        </div>
                        <div className="d-price">
                          Minimum KM <span>{item.minKM}</span>
                          <a
                            className="btn-main"
                            data-bs-toggle="modal"
                            data-bs-target="#scrollableModal"
                          >
                            Rent Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="scrollableModal"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="scrollableModalLabel"
        aria-hidden="true"
      >
        <BookForm title={"Book Now"} btn={"Close"} />
      </div>
      <CallWhatsapp />
    </>
  );
};

export default Cars;
