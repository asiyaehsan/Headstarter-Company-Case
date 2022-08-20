import React, { useState } from 'react'

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className=''>
      <h1 className=''>
        Headstarter Group Manager
      </h1>
      {user?.displayName ? (
        <div className="navBar">
          <Link to='/'>Home</Link>
          <br />
      {/* <Link to='/account'>Account</Link>
          <br /> */}
          <Link to='/calendar'>Calendar</Link>
          <br />
          <Link to='/videocall'>Video Call</Link>
                  <Account/>
        </div>

      ) : (
        <div className="navBar">
          <Link to='/'>Sign in</Link>
          <br />

        </div>
      )}
      {/* {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        // <Link to='/signin'>Sign in</Link>
          <div className="navBar">
            <Link to='/'>Home</Link>
            <br />
            <Link to='/account'>Account</Link>
            <br />
            <Link to='/calendar'>Calendar</Link>
            <br />
            <Link to='/videocall'>Video Call</Link>
          </div>
        
      )} */}
    </div>
  );
};
