import React from 'react';

import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer';

function login() {
    return (
        <div>
            <Navbar/>
            <Login/>
            <Footer/>
        </div>
    )
}

export default login;
