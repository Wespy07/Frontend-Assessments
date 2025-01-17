import React, { useState } from 'react'

function Flat({src, viewsCount, starsCount, mainTitle, mainDate, mostLiked, wishListed}) {
    const [isLiked, setIsLiked] = useState(mostLiked)
    const [iswishlisted, setIswishlisted] = useState(wishListed)

    return (
        <div className='flat-box'>

            {isLiked && (
                <div className='most-liked'>
                    <p>Most Liked</p>
                </div>
            )}


            <div onClick={()=> setIswishlisted(!iswishlisted)} className='pro-heart'>
                {(iswishlisted ? <img src="./heartf.png" /> : <img src="./heart.png" /> )}
            </div>


            <div className='top-box'>
                <img src={src} />
            </div>
            <div className='info-box'>
                <div className="top-one">
                    <div className="views-box">
                        <img src="./Show.png" />
                        <p className='views-count'>{viewsCount}</p>
                    </div>
                    <div className='star-box'>
                        <img src="./Star.png" />
                        <p className='star-count'>{starsCount}</p>
                    </div>
                </div>

                <div className='title'>
                    <h3>{mainTitle}</h3>
                    <p className='title-date'>{mainDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Flat