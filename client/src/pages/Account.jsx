import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TeamMembers } from '../components/TeamMembers';
import Sidebar from '../components/Sidebar';
import { getDatabase, ref, set, remove} from "firebase/database";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase-config";

export const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignOut = async () => {
    try {
      await logOut();

    } catch (error) {
      console.log(error);
    }
  };



  // useEffect(() => {
  //   if (user == null) {
  //     navigate('/');
  //     // navigate('/calendar');
  //   }
  // }, [user]);

  return (
    <div className=''>
      <h1 className=''>Account</h1>
      <br /><br />
      <div>
        <p>Welcome, {user?.displayName}!</p>
      </div>
      <div>
        <TeamMembers/>
      </div>
      <div>
      <button onClick={handleSignOut} className=''>
        Logout
      </button>
      </div>

    </div>
  );
};