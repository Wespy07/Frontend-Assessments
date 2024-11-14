import React, {useState} from 'react'

const Buttons = ({count}) => {
    function incrementor(){
        console.log('we are')
    }
    return (
        <>
            <button>Decrement {count}</button>
            <button onClick={incrementor}>Increment {count}</button>
        </>
    )
}

export default Buttons