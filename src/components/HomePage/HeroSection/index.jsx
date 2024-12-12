import './styles.css';

function HeroSection() {
  return (
    <div className="container mx-auto py-16 m-0 p-6">
      <div className="flex items-center justify-between">
        {/* Left div: Text */}
        <div className="w-1/2 p-6">
          <p className="font-[Bangers] text-white text-[100px] mb-[-70px] mt-[-150px]">
            Hassle-Free
          </p>
          <p className="font-[Bangers] text-[#DF0907] text-[120px] mb-[-70px]">
            Car Services
          </p>
          <p className="font-[Bangers] text-[#332E2B] text-[100px] mb-[60px]">
            You Can Trust
          </p>
          <button className="w-[279px] h-[80px] flex-shrink-0 bg-[#DF0907] text-white font-bold rounded-[50px] text-[40px] font-[Bangers] font-normal leading-normal">
            Explore
          </button>
        </div>

        {/* Right div: Image */}
        <div className="w-1/2">
          <div className="w-full h-full relative overflow-hidden rounded-lg">
            <img
              src="src/assets/images/carpage1.png"
              alt="Car Service"
              className="w-full h-full object-cover rounded-lg "
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-50 blur-md"></div> */}
          </div>
        </div>


      </div>
    </div>
  );
}

export default HeroSection;
