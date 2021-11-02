import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';


function ContactUs()
{
    return(
        <div>
            <Navbar/>
            <Carousel/>
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default ContactUs;