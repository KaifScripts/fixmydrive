import './styles.css';

function HeroSection() {
  const text = 'Our Care: Anywhere Your Car.';
  const radius = 60; // Radius stays the same
  const textLength = text.length;
  const angleStep = (2 * Math.PI) / textLength;
  const fontSize = 30; // Set font size to 30px
  const textOffset = 16; // Adjust this value to move the text above the circle's circumference

  return (
    <div className="container mx-auto py-16 pr-0 m-0">
      {/* Desktop Layout (Visible only on large screens) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-start justify-between relative">

        {/* Left div: Text */}
        <div className="w-full lg:w-1/3 p-6 flex flex-col items-start relative z-10">
          <p className="font-[Bangers] text-white text-[85px] mb-[-35px] mt-[50px] whitespace-nowrap">
            Hassle-Free
          </p>
          <p className="font-[Bangers] text-[#DF0907] text-[110px] mb-[-35px] relative whitespace-nowrap overflow-visible">
            Car Services
          </p>
          <p className="font-[Bangers] text-[#332E2B] text-[85px] mb-[70px] whitespace-nowrap">
            You Can Trust
          </p>
          <button className="w-[230px] h-[60px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[35px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            Explore
          </button>
        </div>

        {/* Right div: Image */}
        <div className="w-full lg:w-2/3 relative mt-8 lg:mt-0 z-0">
          <div className="w-full h-full relative overflow-visible rounded-lg z-0">
            <img
              src="src/assets/images/carpage1.png"
              alt="Car Service"
              className="w-full h-auto lg:h-full overflow-visible mt-16 lg:pl-16"
              style={{
                width: '100%',
                height: 'auto', // Ensure image maintains aspect ratio
              }}
            />

            {/* Circular SVG at the lower-right of the image */}
            <div className="dm-sans absolute right-6 w-[210px] h-[210px] bg-transparent rounded-full flex items-center justify-center z-20"
              style={{ transform: 'translateY(-130px)' }}
            >
              <svg
                width="100%" // Ensure it takes up the full parent size
                height="100%" // Ensure it takes up the full parent size
                className="rotating-circle" // Apply animation class if needed
                style={{ backgroundColor: 'transparent' }}
              >
                {/* Circle with white stroke */}
                <circle cx="105" cy="105" r={radius} fill="none" stroke="white" strokeWidth="1.175" />

                {/* Text positioned above the circumference */}
                <g transform="translate(105, 105)"> {/* This keeps the group at the center */}
                  {Array.from({ length: textLength }, (_, i) => {
                    const angle = angleStep * i; // Angle at which this letter is positioned
                    const x = (radius + textOffset) * Math.cos(angle);  // Increase radius by textOffset to lift text above
                    const y = (radius + textOffset) * Math.sin(angle);  // Increase radius by textOffset to lift text above

                    return (
                      <text
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={fontSize}  // Set the font size to 30px
                        fill="#FFF"  // Set text color to white
                        fontFamily="DM Sans"  // Set font family to DM Sans
                        fontWeight="400"  // Set font weight to 400 (normal)
                        fontStyle="normal"  // Set font style to normal
                        transform={`rotate(${angle * 180 / Math.PI + 90} ${x} ${y})`} // Rotate text to be perpendicular to the circle
                      >
                        {text[i]}
                      </text>
                    );
                  })}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Visible only on small screens) */}
      <div className="lg:hidden">

      <div className="w-full lg:w-1/3 p-6 mr-2 flex flex-col items-start relative z-10">
          <p className="font-[Bangers] text-white text-[65px] mb-[-15px] mt-0 whitespace-nowrap">
            Hassle-Free
          </p>
          <p className="font-[Bangers] text-[#DF0907] text-[80px] mb-[-15px] relative whitespace-nowrap overflow-visible">
            Car Services
          </p>
          <p className="font-[Bangers] text-[#332E2B] text-[65px] mb-[40px] whitespace-nowrap">
            You Can Trust
          </p>
        </div>

        {/* Mobile Image */}
        <div className="mt-8">
          <img
            src="src/assets/images/carpage1.png"
            alt="Mobile Car Service"
            className="w-full h-auto mb-8"
            style={{
              width: '100%',
              height: 'auto', // Ensure image maintains aspect ratio
            }}
          />
          <button className="w-[130px] h-[40px] flex-shrink-0 bg-[#DF0907] px-4 text-white rounded-[50px] text-[25px] font-[Bangers] font-normal leading-normal transition duration-200 hover:bg-white hover:text-[#DF0907]">
            Explore
          </button>
        </div>

      </div>

    </div>
  );
}

export default HeroSection;
