import React from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext'



export const Signin = () => {
    const { googleSignIn } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div>
          Signin
          <GoogleButton onClick={handleGoogleSignIn} />
      </div>
      
  )
}
