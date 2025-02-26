import React from 'react';
import './styles.css';

const BecomePartner = () => {
  return (
    <div className="container mx-auto py-16 pr-0 m-0 relative">
      {/* Red Gradient Background for Heading */}
      <div className="absolute flex justify-center items-center w-full h-[230px] -top-[30px]">
        <div className="absolute w-[330px] h-[230px] bg-[#DF0907] rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Heading Section */}
      <div className="flex justify-center mb-12 relative z-10">
        <h1 className="font-[Bangers] text-white text-[40px] text-center mb-4 mt-10">
          BECOMING A PARTNER
        </h1>
      </div>

      {/* Desktop Layout (Visible only on large screens) */}
      <div className="hidden lg:flex flex-row items-start justify-between relative z-10">
        {/* Left div: Image */}
        <div className="w-full lg:w-1/2 relative mt-0 p-16 lg:mt-0 z-0">
          <img
            src="/src/assets/images/becomepartner.png"
            alt="Partnering with FixMyDrive"
            className="w-full h-auto lg:h-full overflow-visible mt-[-30px] lg:pl-16"
            style={{
              width: '100%',
              height: 'auto', // Ensure image maintains aspect ratio
            }}
          />
        </div>

        {/* Right div: Text */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-start relative z-10">
          <div className="font-dm-sans font-light text-[20px] leading-normal mb-8 max-w-[957px] text-left ">
            <p className="mb-8">
              Join our network of trusted service providers at FixMyDrive. As a partner, you’ll be part of a growing ecosystem of service centers dedicated to delivering high-quality, reliable vehicle services. Our platform connects you with customers who need your expertise, and together we’ll work towards revolutionizing the vehicle repair industry.
            </p>
            <p className="mb-8">
              By partnering with us, you gain access to a wide range of customers, support from our experienced team, and the latest technology to streamline your service operations. We offer competitive rates, easy-to-use tools, and dedicated marketing support to help you grow your business and reach more customers.
            </p>
            <p>
              Apply today to become a FixMyDrive partner and be part of the future of vehicle services. Together, we’ll make vehicle maintenance and repair more convenient, transparent, and efficient.
            </p>
          </div>
          <button className="w-[230px] h-[60px] mt-[40px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            APPLY FOR A PARTNER
          </button>
        </div>
      </div>

      {/* Mobile Layout (Visible only on small screens) */}
      <div className="lg:hidden flex flex-col items-start relative z-10">
        {/* Mobile Text Section */}
        <div className="w-full p-6 mr-2 flex flex-col items-start relative z-10">
          <div className="font-dm-sans text-lg leading-normal mb-6 max-w-[957px] text-left">
            <p className="mb-6">
              Join our network of trusted service providers at FixMyDrive. As a partner, you’ll be part of a growing ecosystem of service centers dedicated to delivering high-quality, reliable vehicle services. Our platform connects you with customers who need your expertise, and together we’ll work towards revolutionizing the vehicle repair industry.
            </p>
            <p className="mb-6">
              By partnering with us, you gain access to a wide range of customers, support from our experienced team, and the latest technology to streamline your service operations. We offer competitive rates, easy-to-use tools, and dedicated marketing support to help you grow your business and reach more customers.
            </p>
            <p>
              Apply today to become a FixMyDrive partner and be part of the future of vehicle services. Together, we’ll make vehicle maintenance and repair more convenient, transparent, and efficient.
            </p>
          </div>
          <button className="w-[180px] h-[50px] mt-[30px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            APPLY NOW
          </button>
        </div>

        {/* Mobile Image */}
        <div className="mt-2 w-full">
          <img
            src="/src/assets/images/becomepartner.png"
            alt="Mobile Partnering"
            className="w-full h-auto mb-2 mr-4"
            style={{
              width: '75%',
              height: 'auto', // Ensure image maintains aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
