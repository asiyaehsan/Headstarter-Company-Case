import React from 'react'
import { GoogleButton } from 'react-google-button'
import { UserAuth  } from '../context/AuthContext'

export const Signin = () => {
    const handleGoogleSignIn = async () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div>
          Signin
          <GoogleButton/>
      </div>
      
  )
}
