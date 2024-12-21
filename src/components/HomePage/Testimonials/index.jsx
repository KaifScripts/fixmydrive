import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Samuel Matthew",
      image: "https://via.placeholder.com/150",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Emily Carter",
      image: "https://via.placeholder.com/150",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Emily Carter",
      image: "https://via.placeholder.com/150",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const newLocal = "⭐";
  return (
    <div className="radial-gradient-bg text-white font-sans min-h-screen flex flex-col justify-center items-center">
      {/* Import Google Font Bangers */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          /* Radial Blur Background for the Heading */
          .heading-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 80px;
            width: 100%;
          }

          .heading-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 0, 0, 0.3), transparent);
            filter: blur(60px);
            z-index: -1;
            border-radius: 50%;
          }

          /* Continuous Scrolling Animations */
          @keyframes scrollLeft {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .scroll-left, .scroll-right {
            display: flex;
            will-change: transform;
            gap: 16px; /* Added gap between boxes */
          }

          .scroll-left {
            animation: scrollLeft 20s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 20s linear infinite;
          }

          /* Ensure there's no delay by making sure the items don't overlap */
          .scroll-left, .scroll-right {
            width: 100%;
          }

          /* Duplicate content for seamless scroll effect */
          .scroll-left, .scroll-right {
            display: flex;
            flex-wrap: nowrap;
          }

          /* Testimonial box styling */
          .testimonial-wrapper {
            flex-shrink: 0;
            width: 300px;
            height: 180px;
            background-color: rgba(0, 0, 0, 0.6); /* Slightly transparent background */
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: 1px solid #4B5563;
            padding: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: start; /* Center content vertically */
            align-items: start; /* Center content horizontally */
            margin: 0 8px; /* Added margin to create space between boxes */
          }

          .testimonial-wrapper .text {
            text-align: center; /* Center the text inside the box */
          }

          .testimonial-wrapper .rating {
            display: flex;
            justify-content: start;
            align-items:start;
            gap: 4px;
          }
        `}
      </style>

      {/* Testimonials Section */}
      <section className="px-4 bg-transparent w-full text-center">
        <div className="heading-container">
          <h2 className="text-5xl font-bold" style={{ fontFamily: "Bangers, cursive" }}>
            Testimonials
          </h2>
        </div>

        {/* First Row (Scrolling Right-to-Left) */}
        <div className="overflow-hidden mt-20">
          <div className="testimonial-container scroll-left">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-wrapper">
                <div className="flex justify-start items-center mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12 border-2 border-white object-cover"
                  />
                  <h3 className="text-md font-semibold uppercase text-white ml-2">
                    {testimonial.name}
                  </h3>
                </div>
                <div className="rating mb-2">
                  <span className="text-red-500">{newLocal.repeat(testimonial.rating)}</span>
                  <span className="text-gray-400">{'☆'.repeat(5 - testimonial.rating)}</span>
                </div>
                <p className="text-sm text-gray-300 text-center leading-snug">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Scrolling Left-to-Right) */}
        <div className="overflow-hidden mt-10">
          <div className="testimonial-container scroll-right">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-wrapper">
                <div className="flex justify-center items-center mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12 border-2 border-white object-cover"
                  />
                  <h3 className="text-md font-semibold uppercase text-white ml-4">
                    {testimonial.name}
                  </h3>
                </div>
                <div className="rating text-red-700 mb-2">
                  {"⭐".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-sm text-gray-300 text-center leading-snug">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

