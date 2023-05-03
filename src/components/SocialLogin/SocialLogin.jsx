import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({from}) => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from,{replace:true})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from,{replace:true})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='flex flex-col gap-2 mt-6 '>
        <button
          onClick={handleGoogleSignIn}
          className='btn btn-accent w-full text-white'
        >
          {" "}
          <FcGoogle className='text-2xl mr-2' /> SingIn with Google
        </button>
        <button onClick={handleGithubSignIn} className='btn btn-accent w-full text-white'>
          {" "}
          <FaGithub className='text-2xl text-gray-800 mr-2' /> SingIn with
          github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
