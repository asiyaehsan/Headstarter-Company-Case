import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from "react-google-button";
import info from "./images/info.png"

export const Home = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <div className=''>
      <div className=''>
        <div>
          <p className='text-6xl font-black text-indigo-700 flex item-center justify-center pt-10 mb-24'>Welcome to Headstarter, {user?.displayName}</p>
          <div className='flex flex-col md:flex-row h-screen items-center'>
            <img  src='https://www.theheadstarter.com/static/media/HERO.69e44b65.png'/>
            <div class="position:relative xl:w-1/2 px-10 ml-10 flex items-center justify-center">
              <img src={info}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};