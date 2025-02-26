import React from "react";
import "./styles.css"; // Ensure the CSS file contains the provided styles

const services = [
  { title: "PERIODIC SERVICES", icon: "src/assets/images/image1.gif" },
  { title: "INSURANCE CLAIMS", icon: "src/assets/images/image2.gif" },
  { title: "CAR WASH", icon: "src/assets/images/image3.gif" },
  { title: "MOTOR SERVICE", icon: "src/assets/images/image4.gif" },
  { title: "CAR WASH", icon: "src/assets/images/image5.gif" },
  { title: "WINDSHIELDS", icon: "src/assets/images/image6.gif" },
  { title: "SUSPENSIONS & FITMENTS", icon: "src/assets/images/image7.gif" },
  { title: "DETAILING SERVICE", icon: "src/assets/images/image8.gif" },
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <div className="relative w-full">
        {/* Red Gradient Background Behind Heading */}
        <div className="absolute flex justify-center items-center w-full h-[110px] top-[0px]">
          <div className="absolute w-[230px] h-[230px] bg-[#DF0907] rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8 ban text-center relative z-10 mb-10 ">OUR SERVICES</h1>
      </div>

      <div className="relative grid-container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between dd rounded-2xl p-6 relative shadow-lg hover:scale-105 transition-transform border border-white backdrop-blur-md ${
                service.title === "CAR WASH" ? "bg-white/20" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="y" />
              </div>
              <h2 className="text-center hh al">{service.title}</h2>
              <button className="absolute jj h-12 w-12 bg-[#DF0907] rounded-full flex items-center justify-center text-white hover:bg-[#DF0907] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="w-[180px] h-[40px] mt-[60px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
        VIEW MORE
      </button>
    </div>
  );
}
