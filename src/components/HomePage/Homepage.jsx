import React, { useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import ServiceCentres from './ServiceCentres';
import BecomePartner from './BecomePartner';
import Testimonials from './Testimonials';
import Footer from './Footer';
function HomePage() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutUs/>
            <OurServices/>
            <ServiceCentres/>
            <BecomePartner/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

export default HomePage;
