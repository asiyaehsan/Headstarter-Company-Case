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
    emailjs.send("service_oba80fg","template_yecws5x",{
      user_name: name,
      user_email: email,
      });
  };

//   return (
//     <p>Welcome, {user?.displayName}. Your email is {email}</p>
//   );
};
