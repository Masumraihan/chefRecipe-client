import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const { createUser, updateUser } = useContext(AuthContext);

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    if (!/(?=.*[A-Z])/.test(passwordInput)) {
      setPasswordError(" password must have one uppercase character");
    } else if (!/(?=.*[0-9])/.test(passwordInput)) {
      setPasswordError("password must have one number");
    } else if (!/(?=.*[!@#$%^&*])/.test(passwordInput)) {
      setPasswordError("password must have one special character");
    } else if (passwordInput.length < 6) {
      setPasswordError("password must have six character");
    } else {
      setPasswordError("");
    }
    setPassword(passwordInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUser(name, photoUrl)
          .then((result) => {
            //console.log(result?.user);
          })
          .catch((err) => {
            setError(err);
          });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className='hero min-h-screen bg-base-200 py-12'>
      <div className='md:w-2/4 lg:w-1/3'>
        <div className='card flex-shrink-0 w-full border shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit} className='card-body w-full'>
            <h1 className='text-3xl text-center font-semibold '>
              Create a new Account
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo Url</span>
              </label>
              <input
                type='url'
                placeholder='photo url'
                className='input input-bordered'
                name='photo'
                required
                onChange={(e) => setPhotoUrl(e.target.value)}
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
                onChange={handlePassword}
              />
              {password && (
                <p className='text-red-500'>
                  {passwordError ? passwordError : ""}
                </p>
              )}
            </div>
          </form>
          <div className="card-body">
            <div className='form-control mt-6'>
              <button className='btn btn-primary' type='submit'>
                SignUp
              </button>
            </div>
            <p className='text-red-600'>{error ? error.message : ""}</p>
            <SocialLogin />
          </div>
            <p className="ml-9">
              Already have an account?{" "}
              <Link to='/login' className='btn btn-link'>
                login
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
