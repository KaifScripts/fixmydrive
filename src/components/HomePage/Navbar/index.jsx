import React, { useState, useRef, useEffect } from "react";
import './styles.css';

function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle state
  const buttonRefs = useRef([]);
  const menuRef = useRef(null);

  // Function to handle button click
  const handleButtonClick = (buttonName, index) => {
    setActiveButton(buttonName);
    const button = buttonRefs.current[index];
    if (button) {
      const rect = button.getBoundingClientRect();
      setButtonPosition({
        left: rect.left + rect.width / 2,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (!activeButton) {
      setButtonPosition({ left: 0, width: 0 });
    }
  }, [activeButton]);

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  const closeMenuIfClickedOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.hamburger')) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener for clicking outside
  useEffect(() => {
    document.addEventListener('click', closeMenuIfClickedOutside);
    return () => {
      document.removeEventListener('click', closeMenuIfClickedOutside);
    };
  }, []);

  return (
    <div className="navbar bangers-regular bg-black text-white">
      {/* Large Screen Navbar */}
      <header className="hidden lg:flex justify-between items-center container mx-auto max-w-full py-4">
        {/* Left div: Logo */}
        <div className="logo">
          <img
            src="src/assets/images/logo.svg"
            alt="Logo"
            className="logo sm:h-16 md:h-16 lg:h-16"
          />
        </div>

        {/* Center div: Navigation buttons */}
        <div className="middle-buttons nav-links flex justify-center w-[600px] h-[50px] flex-shrink-0 border-2 border-white rounded-full bg-[#ebe9e9] bg-opacity-20">
          {["Home", "Services", "Centres", "Partnership", "Accessories"].map((buttonName, index) => (
            <button
              key={buttonName}
              ref={(el) => buttonRefs.current[index] = el} // Set the button reference
              className={`button-link flex-1 px-4 py-2 rounded-full 
                ${activeButton === buttonName ? 'bg-white text-[#DF0907] border-[#DF0907]' : ''} 
                active:bg-white active:text-[#DF0907] active:border-[#DF0907]`}
              onClick={() => handleButtonClick(buttonName, index)}
            >
              {buttonName}
            </button>
          ))}
        </div>

        {/* Right div: Login */}
        <div className="login">
          <button className="text-[#DF0907] bg-white px-12 py-2 rounded-full transition duration-200 hover:bg-[#DF0907] hover:text-white">
            Login
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="lg:hidden flex justify-between items-center mx-auto max-w-full py-6 px-8 bg-transparent">
        {/* Left div: Logo */}
        <div className="logo">
          <img
            src="src/assets/images/logo.svg"
            alt="Logo"
            className="h-[40px]" // Logo size set to 100x100px on mobile
          />
        </div>

        {/* Right div: Hamburger menu and Login */}
        <div className="flex items-center space-x-4">
          {/* Login button */}
          <div className="login">
            <button className="text-[#DF0907] bg-white px-8 py-2 rounded-full transition duration-200 hover:bg-[#DF0907] hover:text-white">
              Login
            </button>
          </div>

          {/* Hamburger menu (only visible on mobile) */}
          <button
            onClick={toggleMenu}
            className="hamburger text-white"
          >
            <i
              className="fas fa-bars"
              style={{
                fontSize: "40px", // Hamburger icon size set to 130px
              }}
            ></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu (Hamburger opens this) */}
      <div
        ref={menuRef}
        className={`mobile-menu ${isMenuOpen ? "block" : "hidden"} lg:hidden bg-black text-white absolute top-0 left-0 w-full z-50`}
        style={{ height: 'calc(55vh - 55px)' }} // Make the menu take up space below "Accessories"
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-times" style={{ fontSize: '40px' }}></i> {/* Cross icon */}
          </button>
        </div>
        <ul className="space-y-4 p-4 mt-16">
          {["Home", "Services", "Centres", "Partnership", "Accessories"].map((buttonName) => (
            <li key={buttonName}>
              <button
                onClick={() => handleButtonClick(buttonName, 0)} // You can adjust index logic if needed
                className="w-full text-center text-lg py-2 px-4 rounded-full hover:bg-[#DF0907] hover:text-white"
              >
                {buttonName}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Background blur div */}
      <div
        className={`red-blur ${activeButton ? "show-blur" : ""}`}
        style={{
          left: `${buttonPosition.left - buttonPosition.width / 2}px`,
          width: `${buttonPosition.width}px`,
        }}
      ></div>
    </div>
  );
}

export default Navbar;
