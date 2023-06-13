
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth,provider } from '../firebase'
import {   signInWithPopup } from 'firebase/auth'

const Signin = () => {
    
    const googleSignin=()=>{
        
        signInWithPopup(auth,provider)
    }
  return (
    <div className='flex justify-center'>
        <GoogleButton onClick={googleSignin}></GoogleButton>
    </div>
  )
}

export default Signin