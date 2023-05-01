import React from "react";
import ActiveLink from "../../components/ActiveLink/ActiveLink";

const Navbar = () => {
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
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
            </div>
          </label>
          <a className='btn btn-primary'>Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
