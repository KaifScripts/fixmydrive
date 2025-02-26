import React, { useEffect } from 'react';
import Navbar from '../HomePage/Navbar';
import MainServicesPage from './OurServices';
import Footer from '../HomePage/Footer';
function ServicesPage() {
    return (
        <>
            <Navbar/>
            <MainServicesPage/>
            <Footer/>
        </>
    );
}

export default ServicesPage;