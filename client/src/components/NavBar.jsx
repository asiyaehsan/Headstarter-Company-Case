import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Account } from "../pages/Account";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=''>
      {user?.displayName ? (
        <div className="navBar">
          <Link to='/'>Home</Link>
          <br />
          <Link to='/calendar'>Calendar</Link>
          <br />
          <Link to='/videocall'>Video Call</Link>
        </div>

      )
        : (
        <div className="navBar">
          {/* <Link to='/'>Sign in</Link> */}
        </div>
      )
      }
    </div>
  );
};

export default Navbar;