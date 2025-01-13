import React, { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'

function Form() {


    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(userName, email, password, confirmPassword)

        let validationError = ''

        if (password.length < 8) {
            validationError = 'Password must be at least 8 characters';
        } else if (confirmPassword !== password) {
            validationError = 'Password and confirm password must be the same';
        } else if(!/[A-Z]/.test(password)){
            validationError = 'Password must have atleast one capital letter'
        } else if(!/[a-z]/.test(password)){
            validationError = 'Password must have atleast one small letter'
        } else if(!/[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?]/.test(password)){
            validationError = 'Password must have atleast one special character'
        } 

        if (validationError) {
            setError(validationError)
        } else {
            setUserName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setError('')
            toast.success('Your account has been created!', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    const passwordToggler = ()=>{
        setShowPassword(!showPassword)
        console.log(showPassword)
    }
    const passwordConfirmToggler = ()=>{
        setShowConfirmPassword(!showConfirmPassword)
        console.log(showConfirmPassword)
    }


    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <form onSubmit={submitHandler} className='p-7 flex flex-col gap-5 bg-white rounded-lg w-1/4'>
                <div className='text-2xl font-bold'>
                    <h2>Create your account</h2>
                </div>
                <div className='border-2 px-3 py-1 rounded-md w-full'>
                    <input
                        required
                        type="text"
                        minLength={3}
                        placeholder='Your name'
                        className='w-full border-none outline-none'
                        onChange={(e) => { setUserName(e.target.value) }}
                        value={userName} />
                </div>
                <div className='border-2 px-3 py-1 rounded-md w-full'>
                    <input
                        required
                        type="email"
                        placeholder='Your email'
                        className='w-full border-none outline-none'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email} />
                </div>
                <div className='border-2 px-3 py-1 rounded-md w-full flex items-center'>
                    <input
                        required
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Your password'
                        className='w-full border-none outline-none'
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                    <p onClick={passwordToggler} className='cursor-pointer text-gray-400'>
                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                    </p>
                </div>
                <div className='border-2 px-3 py-1 rounded-md w-full flex items-center'>
                    <input
                        required
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirm password'
                        className='w-full border-none outline-none'
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        value={confirmPassword}
                    />
                    <p onClick={passwordConfirmToggler} className='cursor-pointer text-gray-400'>
                        {showConfirmPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                    </p>
                </div>

                {error && (
                    <p className='text-red-500 font-semibold text-xs w-full'>{error}</p>
                )}

                <div className='cursor-pointer border-2 px-3 py-1 rounded-md w-full text-center bg-blue-500 hover:bg-blue-700 text-white'>
                    <button className='border-none outline-none'><input type="submit" className='cursor-pointer' /></button>
                </div>
            </form>

            <ToastContainer>

            </ToastContainer>
        </div>
    )
}

export default Form