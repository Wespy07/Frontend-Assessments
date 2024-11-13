import React from 'react'

import { app } from '../../firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

function LoginPage() {

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

  return (
    <div className='relative h-screen w-full bg-[#ebebeb] flex justify-center items-center flex-col'>
        <img src="/login/1.png" className='absolute top-10' />
        <button 
        onClick={signUpWithGoogle} 
            className='flex h-8 justify-center items-center mt-20 bg-[#2b2b2b] rounded-md text-white px-3'> 
                <img src="/login/google logo.png" className='h-full' />
            Login with Google
        </button>
        <img src="/login/2.png" className='absolute bottom-0' />
    </div>
  )
}

export default LoginPage