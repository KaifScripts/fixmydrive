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
      name: "Samuel Matthew",
      image: "https://via.placeholder.com/150",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Samuel Matthew",
      image: "https://via.placeholder.com/150",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="radial-gradient-bg text-white font-sans min-h-screen">
      <style>
        {`
          /* Animation for right-to-left scrolling */
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          /* Animation for left-to-right scrolling */
          @keyframes scrollRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }

          .scroll-left {
            animation: scrollLeft 15s linear infinite;
          }

          .scroll-right {
            animation: scrollRight 15s linear infinite;
          }
        `}
      </style>

      {/* Testimonials Section */}
      <section className="px-2 bg-transparent">
        {/* Heading with Red Gradient Background */}
        <div className="relative mb-8">
          {/* <div className="absolute w-[100px] h-[200px] bg-[#DF0907] rounded-full blur-3xl opacity-30 top-[-70px]"></div> */}
          <h2 className="text-4xl font-bold text-center relative z-10">
            Testimonials
          </h2>
        </div>

        {/* First Row (Scrolling Right-to-Left) */}
        <div className="overflow-hidden">
          <div className="flex space-x-8 w-max scroll-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-2xl border border-gray-400 p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full border-2 border-white"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase text-white mb-2">
                  {testimonial.name}
                </h3>
                <div className="text-center text-yellow-400 mb-4">
                  {"⭐".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Scrolling Left-to-Right) */}
        <div className="overflow-hidden mt-10">
          <div className="flex space-x-8 w-max scroll-right">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-2xl border border-gray-400 p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover w-full h-full border-2 border-white"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase text-white mb-2">
                  {testimonial.name}
                </h3>
                <div className="text-center text-yellow-400 mb-4">
                  {"⭐".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
