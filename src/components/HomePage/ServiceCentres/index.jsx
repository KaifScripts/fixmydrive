import React from "react";
import "./styles.css"; // Adjust the path if necessary

const ServiceCentres = () => {
  return (
    <div className="container">
      <h2 className="heading">SERVICE CENTRES</h2>
      <div className="grid">
        {centres.map((centre, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img 
                src={centre.image} 
                alt="Service Centre" 
                width={300} 
                height={200} 
                className="image" 
              />
            </div>
            <h3 className="title">{centre.title}</h3>
            <p className="description">{centre.description}</p>
            <button className="details-button">VIEW DETAILS</button>
          </div>
        ))}
      </div>
      <button className="view-more">VIEW MORE</button>
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
