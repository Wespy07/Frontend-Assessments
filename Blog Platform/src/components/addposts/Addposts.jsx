import React from 'react'

function Addposts() {
    return (
        <div className='h-16 rounded-full w-56 bg-black mx-auto mt-3 text-white gap-1 flex justify-between p-2 items-center'>
            <div className='flex w-[60%] justify-center items-center gap-2 bg-gray-800 px-3 py-2 rounded-full h-full'>
                <i className="fa-solid fa-plus"></i>
                <h4>Write Post</h4>
            </div>
            <div className='flex w-[40%] justify-around items-center gap-2 bg-gray-800 px-3 py-2 rounded-full h-full'>
                <img src="/others/menu.png" />    
                <img src="/others/stack.png" />    
            </div>
        </div>
    )
}

export default Addposts