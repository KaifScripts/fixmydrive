import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Testimonials from './Testimonials';
import Footer from './Footer';
function HomePage() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

export default HomePage;