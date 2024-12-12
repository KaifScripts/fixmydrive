import './styles.css';

function Navbar() {
  return (
    <div className="bangers-regular bg-black text-white">
      <header className="p-8">
        {/* Navbar container */}
        <div className="navbar container mx-auto flex justify-between items-center m-0">

          {/* Left div: Logo */}
          <div className="logo">
            <img src="src/assets/images/logo.png" alt="Logo" className="logo h-10" />
          </div>

          {/* Center div: Navigation buttons (Home, Services, Centres, Partnership, Accessories) */}
          <div class="middle-buttons nav-links flex justify-center w-[815px] h-[65px] flex-shrink-0 border-2 border-white rounded-full bg-[#ebe9e9] bg-opacity-20">
            <button class="button-link flex-1 px-4 py-2 rounded-full transition-all duration-100 hover:bg-white hover:text-[#DF0907] hover:border-[#DF0907] active:bg-white active:text-[#DF0907] active:border-[#DF0907] ">
              Home
            </button>
            <button class="button-link flex-1 px-4 py-2 rounded-full transition-all duration-100 hover:bg-white hover:text-[#DF0907] hover:border-[#DF0907] active:bg-white active:text-[#DF0907] active:border-[#DF0907] ">
              Services
            </button>
            <button class="button-link flex-1 px-4 py-2 rounded-full transition-all duration-100 hover:bg-white hover:text-[#DF0907] hover:border-[#DF0907] active:bg-white active:text-[#DF0907] active:border-[#DF0907] ">
              Centres
            </button>
            <button class="button-link flex-1 px-4 py-2 rounded-full transition-all duration-100 hover:bg-white hover:text-[#DF0907] hover:border-[#DF0907] active:bg-white active:text-[#DF0907] active:border-[#DF0907] ">
              Partnership
            </button>
            <button class="button-link flex-1 px-4 py-2 rounded-full transition-all duration-100 hover:bg-white hover:text-[#DF0907] hover:border-[#DF0907] active:bg-white active:text-[#DF0907] active:border-[#DF0907] ">
              Accessories
            </button>
          </div>


          {/* Right div: Login */}
          <div className="login">
            <button className="text-red-600 bg-white px-12 py-2 rounded-full transition duration-300 hover:bg-red-600 hover:text-white">
              Login
            </button>
          </div>


        </div>
      </header>
    </div>
  );
}

export default Navbar;
