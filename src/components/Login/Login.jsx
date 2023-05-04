import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, {replace:true});
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className='hero min-h-screen bg-base-200 py-12'>
      <div className='md:w-2/4 lg:w-1/3'>
        <div className='card flex-shrink-0 w-full border shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body w-full border'>
            <h1 className='text-3xl text-center font-semibold '>
              Please Login
            </h1>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
            <p className='text-red-600'>{error ? error.message : ""}</p>
            <SocialLogin from={from} />
            <p>
              don&apos;t have an account?{" "}
              <Link to='login/signup' className='btn btn-link'>
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
