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
        {/* Updated Heading with Blurry Glow */}
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-bold relative z-10">Testimonials</h2>
          <div className="absolute inset-0 flex justify-center">
            <div className="w-[400px] h-[100px] blur-2xl bg-red-950/50"></div>
          </div>
        </div>

        {/* First Row (Scrolling Right-to-Left) */}
        <div className="mt-40 overflow-hidden">
          <div className="flex space-x-8 w-max scroll-left">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[350px] bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-2xl border border-gray-400 p-6 shadow-lg"
              >
                {/* Top Section */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold uppercase text-white">
                      {testimonial.name}
                    </h3>
                    <div className="text-yellow-400">
                      {"⭐".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <p className="text-sm text-gray-300 leading-relaxed text-center">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Scrolling Left-to-Right) */}
        <div className="mt-10 overflow-hidden">
          <div className="flex space-x-8 w-max scroll-right">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[350px] bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-2xl border border-gray-400 p-6 shadow-lg"
              >
                {/* Top Section */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold uppercase text-white">
                      {testimonial.name}
                    </h3>
                    <div className="text-yellow-400">
                      {"⭐".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <p className="text-sm text-gray-300 leading-relaxed text-center">
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


