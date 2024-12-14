import React from "react";
import "./styles.css"; // Adjust the path to your CSS file if necessary

const services = [
  { title: "PERIODIC SERVICES", icon: "src/assets/images/q.png" },
  { title: "INSURANCE CLAIMS", icon: "src/assets/images/q2.png" },
  { title: "CAR WASH", icon:"src/assets/images/q.png" },
  { title: "MOTOR SERVICE", icon: "src/assets/images/q2.png" },
  { title: "CAR WASH", icon: "src/assets/images/q.png" },
  { title: (
    <>
      WINDSHIELDS &<br />
      LIGHTS
    </>
  ), icon: "q2.png" },
  { title: (
    <>
      SUSPENSIONS <br />
      & FITMENTS
    </>
  ), icon: "q.png" },
  { title: "DETAILING SERVICE", icon: "q2.png" },
];

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-8 ban">OUR SERVICES</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between dd rounded-lg p-6 relative shadow-lg hover:scale-105 transition-transform ${
              service.title === "CAR WASH" ? "bg-red-300" : ""
            }`}
          >
            <div className="mb-4 flex items-center justify-center">
              <img src={service.icon} alt={service.title} className="y" />
            </div>
            <h2 className="text-center hh al text-lg font-semibold mb-4">{service.title}</h2>
            <button className="absolute bottom-4 jj right-4 h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
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
      <button className="mt-8 px-6 py-2 bg-red-600 rounded-full text-white text-lg hover:bg-red-700 f transition ban">
        VIEW MORE
      </button>
    </div>
  );
}
