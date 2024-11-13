import React from 'react'
import Blogposts from '../blogPosts/Blogposts'

import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../firebase'

const auth = getAuth(app)

function Homepage({ user }) {
    console.log(user)
    return (
        <div className='h-screen w-full bg-gradient-to-b from-[#b1aca0] to-[#2d2d2d] pt-10'>
            <div className='h-28 w-[80%] mx-auto flex items-center justify-between'>
                <div className='h-full flex items-center gap-5'>
                    <img src={user.photoURL} className='h-full rounded-full border-[5px] border-[#b9b5ac]' />
                    <div>
                        <h2 className='text-3xl font-bold text-white'>Hello {user.displayName
                        }</h2>
                        <h4 className='text-lg text-white'>Welcome Back</h4>
                    </div>
                </div>
                <div>
                    <button onClick={() => signOut(auth)}>
                        <i className="fa-solid fa-arrow-right-from-bracket text-3xl bg-white py-5 px-6 rounded-full"></i>
                    </button>
                </div>
            </div>

            <div>
                <h2 className='text-3xl font-bold text-white text-center my-5'>For You</h2>
            </div>

            < Blogposts
                title='React: Building a multi-step form with wizard pattern'
                tag1='form' tag2='react'
                src='/others/React.webp'
                alt='react'
            />
        </div>
    )
}

export default Homepage