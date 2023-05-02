import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='md:w-2/4 lg:w-1/3'>
        <div className='card flex-shrink-0 w-full border shadow-2xl bg-base-100'>
          <form className='card-body w-full border'>
            <h1 className='text-3xl text-center font-semibold '>
              Please Login
            </h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <SocialLogin/>
            <p>
              don&apos;t have an account?{" "}
              <Link to='login/signup' className='btn btn-link'>SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
