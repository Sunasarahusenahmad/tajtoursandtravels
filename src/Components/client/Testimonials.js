import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider.",
      name: "Stepanie Hutchkiss",
      imageSrc: "/assets/images/testimonial/1.jpg",
    },
    {
      text: "We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is Excellent Service! and they are always available to help with any issues we have. Their prices are also very competitive.",
      name: "Jovan Reels",
      imageSrc: "/assets/images/testimonial/2.jpg",
    },
    {
      text: "Endorsed by industry experts, Rentaly is the Car Rental solution you can trust. With years of experience in the field, we provide fast, reliable and secure Car Rental services.",
      name: "Kanesha Keyton",
      imageSrc: "/assets/images/testimonial/3.jpg",
    },
    {
      text: "I had an amazing experience with Rentaly. The car was in perfect condition, and the entire process was smooth and easy.",
      name: "John Doe",
      imageSrc: "/assets/images/testimonial/1.jpg",
    },
    {
      text: "Rentaly provides the best car rental services. I will definitely choose them again for my next trip.",
      name: "Jane Smith",
      imageSrc: "/assets/images/testimonial/2.jpg",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;

    const startSlider = () => {
      interval = setInterval(() => {
        if (slider) {
          let cardWidth;

          // Check if the screen width is less than 768px (for mobile)
          if (window.innerWidth <= 768) {
            cardWidth = slider.offsetWidth; // Full width of one card on mobile
          } else {
            cardWidth = slider.offsetWidth / 3; // One-third width for larger screens
          }

          slider.scrollLeft += cardWidth; // Scroll by the calculated card width

          if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
            slider.scrollLeft = 0; // Reset to the beginning when it reaches the end
          }
        }
      }, 3000); // Change slide every 3 seconds
    };

    startSlider();

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  return (
    <section id="section-testimonials" className="no-top no-bottom">
      <div className="container">
        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="de-image-text">
                <div className="d-text">
                  <div className="d-quote id-color">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <h4>Excellent Service! Car Rent Service!</h4>
                  <blockquote>
                    {testimonial.text}
                    <span className="by">{testimonial.name}</span>
                  </blockquote>
                </div>
                <img
                  src={testimonial.imageSrc}
                  className="img-fluid"
                  alt={testimonial.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
