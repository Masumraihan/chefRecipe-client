import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const RecipeLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </>
    );
};

export default RecipeLayout;