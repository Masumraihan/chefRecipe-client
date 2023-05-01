import React from "react";
import Header from "../shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

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
