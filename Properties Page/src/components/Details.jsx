import React from 'react'
import Footer from './Footer'

function Details() {
    return (
        <>
            <div className='details'>
                <div className="details-cont">
                    <h2>Details</h2>
                    <div className='map-cont'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104633.70069378213!2d77.55971058649118!3d12.941546136565131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119f74a5da2d%3A0x4b791d1ffff7e13!2sPropsoch!5e0!3m2!1sen!2sin!4v1737139206977!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default Details