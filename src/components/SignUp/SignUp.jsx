import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className='hero min-h-screen bg-base-200 py-12'>
      <div className='md:w-2/4 lg:w-1/3'>
        <div className='card flex-shrink-0 w-full border shadow-2xl bg-base-100'>
          <form className='card-body w-full border'>
            <h1 className='text-3xl text-center font-semibold '>
              Please Signup
            </h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                className='input input-bordered'
                name='name'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                name='email'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                name='password'
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <SocialLogin />
            <p>
              Already have an account?{" "}
              <Link to='/login' className='btn btn-link'>
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
