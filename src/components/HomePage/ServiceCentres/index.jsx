import React from "react";
import "./styles.css"; // Ensure the CSS file contains the provided styles

const ServiceCentres = () => {
  return (
    <div className="container">
      <div className="relative w-full">
        {/* Red Gradient Background Behind Heading */}
        <div className="absolute flex justify-center items-center w-full h-[210px] -top-[30px]">
          <div className="absolute w-[230px] h-[230px] bg-[#DF0907] rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Heading */}
        <h2 className="heading ban text-[#DF0907] relative z-10">SERVICE CENTRES</h2>
      </div>

      <div className="grid">
        {centres.map((centre, index) => (
          <div key={index} className="card rounded-[15px] overflow-hidden shadow-lg">
            <div className="image-container">
              <img
                src={centre.image}
                alt="Service Centre"
                width={300}
                height={200}
                className="image"
              />
            </div>
            <h3 className="title ban">{centre.title}</h3>
            <p className="description">{centre.description}</p>
            <button className="w-[110px] h-[40px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[18px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
              VIEW DETAILS
            </button>
          </div>
        ))}
      </div>
      <button className="w-[180px] h-[40px] mt-[60px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
        VIEW MORE
      </button>
    </div>
  );
};

const centres = [
  {
    title: "LOREM IPSUM",
    image: "src/assets/images/image.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "LOREM IPSUM",
    image: "src/assets/images/image.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "LOREM IPSUM",
    image: "src/assets/images/image.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default ServiceCentres;
