import React from 'react';
import './styles.css';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 pr-0 m-0 relative">
      {/* Red Gradient Background for Heading */}
      <div className="absolute flex justify-center items-center w-full h-[210px] -top-[30px]">
        <div className="absolute w-[230px] h-[230px] bg-[#DF0907] rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Heading Section */}
      <div className="flex justify-center mb-12 relative z-10">
        <h1 className="font-[Bangers] text-white text-[55px] text-center mb-4">
          ABOUT US
        </h1>
      </div>

      {/* Desktop Layout (Visible only on large screens) */}
      <div className="hidden lg:flex flex-row items-start justify-between relative z-10">
        {/* Left div: Text */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start relative z-10">
          <div className="font-dm-sans font-light text-[20px] leading-normal mb-8 max-w-[957px] text-left">
            <p className="mb-8">
              At FixMyDrive, we are revolutionizing the way vehicle repair and maintenance services are delivered. As an industry leader in mobile vehicle repair, maintenance, and inspection, our mission is simple: to leverage cutting-edge technology to service any vehicle, anywhere, at any time.
            </p>
            <p className="mb-8">
              At FixMyDrive, we are committed to offering low, fair, and transparent pricing, ensuring that you receive high-quality service without any hidden costs. Our team of skilled technicians is equipped with the latest tools and technology to handle a wide range of vehicle needs, from routine maintenance to complex repairs, making us your trusted partner in vehicle care.
            </p>
            <p>
              Choose FixMyDrive, and experience the convenience and efficiency of mobile vehicle services tailored to fit your busy lifestyle. We are here to keep you moving forward, wherever you are.
            </p>
          </div>
        </div>

        {/* Right div: Image */}
        <div className="w-full lg:w-1/2 relative mt-0 p-16 lg:mt-0 z-0">
          <img
            src="/src/assets/images/car2.png"
            alt="Car Service"
            className="w-full h-auto lg:h-full overflow-visible mt-[-30px] lg:pl-16"
            style={{
              width: '100%',
              height: 'auto', // Ensure image maintains aspect ratio
            }}
          />
          <button className="w-[230px] h-[60px] mt-[60px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[35px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            EXPLORE
          </button>
        </div>
      </div>

      {/* Mobile Layout (Visible only on small screens) */}
      <div className="lg:hidden flex flex-col items-start relative z-10">
        {/* Mobile Text Section */}
        <div className="w-full p-6 mr-2 flex flex-col items-start relative z-10">
          <div className="font-dm-sans text-lg leading-normal mb-6 max-w-[957px] text-left">
            <p className="mb-6">
              At FixMyDrive, we are revolutionizing the way vehicle repair and maintenance services are delivered. As an industry leader in mobile vehicle repair, maintenance, and inspection, our mission is simple: to leverage cutting-edge technology to service any vehicle, anywhere, at any time.
            </p>
            <p className="mb-6">
              At FixMyDrive, we are committed to offering low, fair, and transparent pricing, ensuring that you receive high-quality service without any hidden costs. Our team of skilled technicians is equipped with the latest tools and technology to handle a wide range of vehicle needs, from routine maintenance to complex repairs, making us your trusted partner in vehicle care.
            </p>
            <p>
              Choose FixMyDrive, and experience the convenience and efficiency of mobile vehicle services tailored to fit your busy lifestyle. We are here to keep you moving forward, wherever you are.
            </p>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="mt-2 w-full">
          <img
            src="/src/assets/images/car2.png"
            alt="Mobile Car Service"
            className="w-full h-auto mb-2 mr-4"
            style={{
              width: '75%',
              height: 'auto', // Ensure image maintains aspect ratio
            }}
          />
          <button className="mt-8 w-[130px] h-[40px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
