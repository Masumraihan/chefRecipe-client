import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-400px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
