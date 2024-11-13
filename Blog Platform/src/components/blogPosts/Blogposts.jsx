import React from 'react'
import Addposts from '../addposts/Addposts'

function Blogposts({ title, tag1, tag2, src, alt }) {
    return (
        <>
            <div className='p-5 rounded-lg flex bg-white w-[60%] mx-auto'>
                <div className='text-left w-full flex flex-col gap-2'>
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div>
                        <span className='bg-red-500 text-white py-1 px-4 mr-2 rounded-xl'>{tag1}</span>
                        <span className='bg-red-500 text-white py-1 px-4 mr-2 rounded-xl'>{tag2}</span>
                    </div>
                    <div className='h-40 bg-black rounded-xl flex justify-center items-center'>
                        <img src={src} alt={alt} className='h-full' />
                    </div>
                    <div>
                        <p className='text-gray-700 text-lg'>Multi step forms, also known as wizards segment the user interface flow into sequential stages...</p>
                    </div>
                    <div>
                        <button className='bg-red-500 text-white w-full rounded-xl py-3 text-xl font-bold'>READ MORE</button>
                    </div>
                </div>
            </div>

            < Addposts />
        </>
    )
}

export default Blogposts