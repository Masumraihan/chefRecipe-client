import React, { useContext } from "react";
import ActiveLink from "../../components/ActiveLink/ActiveLink";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log(user?.photoURL);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <ActiveLink to='/'>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>Food Network</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <ActiveLink to='/'>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to='/blogs'>Blogs</ActiveLink>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user?.photoURL && (
            <label
              tabIndex={0}
              className='btn btn-ghost btn-circle avatar mr-3 tooltip tooltip-bottom z-20'
              data-tip={user.displayName && user.displayName}
            >
              <div className='w-12 rounded-full'>
                <img src={user?.photoURL} />
              </div>
            </label>
          )}
          {user ? (
            <Link onClick={handleLogOut} className='btn btn-primary'>
              Logout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary'>
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
