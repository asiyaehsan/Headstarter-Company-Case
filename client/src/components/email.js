import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FirebaseError } from 'firebase/app';
import { UserAuth } from '../context/AuthContext';

export const ContactUs = () => {
  const { logOut, user } = UserAuth();
  const email = user.email
  const name = user.displayName
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oba80fg', 'service_oba80fg', form.current, '6sAjMDieGMezCxlzm')
  };

//   return (
//     <p>Welcome, {user?.displayName}. Your email is {email}</p>
//   );
};