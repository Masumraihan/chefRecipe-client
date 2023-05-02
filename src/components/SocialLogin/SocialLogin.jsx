import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 mt-6 '>
        <button className='btn btn-accent w-full text-white'>
          {" "}
          <FcGoogle className='text-2xl mr-2' /> SingIn with Google
        </button>
        <button className='btn btn-accent w-full text-white'>
          {" "}
          <FaGithub className='text-2xl text-gray-800 mr-2' /> SingIn with
          github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
