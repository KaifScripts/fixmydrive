import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-sans">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 uppercase">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Periodic Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                All Service & Repairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Batteries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tyres & Wheel Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Detailing Services
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Brands */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 uppercase">Popular Brands</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Maruti Suzuki
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hyundai
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Toyota
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tata
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mahindra
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Areas */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 uppercase">Popular Areas</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Mumbai
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bangalore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Delhi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chennai
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hyderabad
              </a>
            </li>
          </ul>
        </div>

        {/* Fix My Drive + Social Media */}
        <div className="text-center md:text-left">
          {/* Fix My Drive Title */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold uppercase">Fix My Drive</h2>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
