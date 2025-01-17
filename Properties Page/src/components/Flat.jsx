import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

function Flat({ id, src, viewsCount, starsCount, mainTitle, mainDate, mostLiked, wishListed }) {
    const [isLiked, setIsLiked] = useState(mostLiked);
    const [isWishlisted, setIsWishlisted] = useState(wishListed);
    const navigate = useNavigate();  

    const handleClick = () => {
        navigate(`/details`);  
    };

    const handleWishlistClick = (e) => {
        e.stopPropagation(); 
        setIsWishlisted(!isWishlisted);  
    };

    return (
        <div className='flat-box' onClick={handleClick}> 
            {isLiked && (
                <div className='most-liked'>
                    <p>Most Liked</p>
                </div>
            )}

            <div onClick={handleWishlistClick} className='pro-heart'>
                {isWishlisted ? <img src="./heartf.png" alt="wishlisted" /> : <img src="./heart.png" alt="not wishlisted" />}
            </div>

            <div className='top-box'>
                <img src={src} alt="property" />
            </div>
            <div className='info-box'>
                <div className="top-one">
                    <div className="views-box">
                        <img src="./Show.png" alt="views" />
                        <p className='views-count'>{viewsCount}</p>
                    </div>
                    <div className='star-box'>
                        <img src="./Star.png" alt="stars" />
                        <p className='star-count'>{starsCount}</p>
                    </div>
                </div>

                <div className='title'>
                    <h3>{mainTitle}</h3>
                    <p className='title-date'>{mainDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Flat;
