import React from "react";
import BookForm from "./BookForm";

const TouristPlaces = () => {
  const places = [
    {
      title: "Statue of Unity",
      imgUrl: "/assets/images/tourist-places/statue-of-unity.jpg",
      district: "Kevadia, Gujarat",
      description:
        "Marvel at the world's tallest statue, the Statue of Unity, in Kevadia, Gujarat.",
      link: "tourist-single.html",
    },
    {
      title: "Somnath Temple",
      imgUrl: "/assets/images/tourist-places/somnath-temple.jpg",
      district: "Somnath, Gujarat",
      description:
        "Visit the sacred Somnath Temple, one of the twelve Jyotirlingas, located on Gujarat's coast.",
      link: "tourist-single.html",
    },
    {
      title: "Gateway of India",
      imgUrl: "/assets/images/tourist-places/gateway-of-india.jpg",
      district: "Mumbai, Maharashtra",
      description:
        "Discover the iconic Gateway of India, a symbol of Mumbai's colonial history.",
      link: "tourist-single.html",
    },
    {
      title: "Ajanta & Ellora Caves",
      imgUrl: "/assets/images/tourist-places/ajanta-ellora.jpg",
      district: "Aurangabad, Maharashtra",
      description:
        "Explore the ancient Ajanta and Ellora Caves, showcasing exquisite rock-cut architecture.",
      link: "tourist-single.html",
    },
    {
      title: "Amer Fort",
      imgUrl: "/assets/images/tourist-places/amer-fort.jpg",
      district: "Jaipur, Rajasthan",
      description:
        "Visit the majestic Amer Fort in Jaipur, a stunning example of Rajput architecture.",
      link: "tourist-single.html",
    },
    {
      title: "Jaisalmer Fort",
      imgUrl: "/assets/images/tourist-places/jaisalmer-fort.jpg",
      district: "Jaisalmer, Rajasthan",
      description:
        "Explore the 'Golden Fort' of Jaisalmer, a UNESCO World Heritage site in Rajasthan.",
      link: "tourist-single.html",
    },
    {
      title: "Khajuraho Temples",
      imgUrl: "/assets/images/tourist-places/khajuraho-temples.jpg",
      district: "Khajuraho, Madhya Pradesh",
      description:
        "Admire the intricate carvings of the Khajuraho Temples, famous for their erotic sculptures.",
      link: "tourist-single.html",
    },
    {
      title: "Sanchi Stupa",
      imgUrl: "/assets/images/tourist-places/sanchi-stupa.jpg",
      district: "Sanchi, Madhya Pradesh",
      description:
        "Visit the Sanchi Stupa, one of India's oldest stone structures and a significant Buddhist site.",
      link: "tourist-single.html",
    },
  ];

  return (
    <>
      <section id="section-news">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 text-center">
              <h2>Explore Top Tourist Places in India</h2>
              <p>
                Discover the most enchanting tourist destinations in India. From
                historical monuments to serene landscapes, explore the best
                spots for your next journey.
              </p>
              <div className="spacer-20"></div>
            </div>
            <div className="clearfix"></div>

            <div id="items-carousel" class="owl-carousel wow fadeIn">
              {places.map((place, index) => (
                <div className="col-lg-12 mb10" key={index}>
                  <div className="bloglist s2 item">
                    <div className="post-content">
                      <div className="post-image">
                        <div className="date-box">
                          <div className="m">{place.district}</div>
                        </div>
                        <img
                          src={place.imgUrl}
                          alt={place.title}
                          className="lazy tourist-img img-fluid"
                        />
                      </div>
                      <div className="post-text">
                        <h4>
                          <a href={place.link}>
                            {place.title}
                            <span></span>
                          </a>
                        </h4>
                        <p>{place.description}</p>
                        <a className="btn-main" href={place.link}>
                          Read More
                        </a>
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
        className="modal fade"
        id="scrollableModal"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="scrollableModalLabel"
        aria-hidden="true"
      >
        <BookForm title={"Book Now"} btn={"Close"} />
      </div>
    </>
  );
};

export default TouristPlaces;
