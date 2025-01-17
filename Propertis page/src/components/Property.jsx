import React from 'react'
import Flat from './Flat'

function Property() {
    return (
        <div className='property-box'>
            < Flat src='./flat1.jpg' viewsCount='411,172' starsCount='3.82' mainTitle='Sushant lok 2, gurgaon' mainDate='Apr 5 - 10' mostLiked={true} wishListed={false} />


            < Flat src='./flat2.jpg' viewsCount='8,402' starsCount='5.0' mainTitle='Rainbow Heights, HSR' mainDate='Mar 9 - 14' mostLiked={false} wishListed={false} />


            < Flat src='./flat3.jpg' viewsCount='12,648' starsCount='2.82' mainTitle='Walden Colorado, US' mainDate='Jan 5 - 10' mostLiked={true} wishListed={true} />


            < Flat src='./flat4.jpg' viewsCount='411,172' starsCount='3.82' mainTitle='Poggibonsi, Itay' mainDate='May 5 - 10' mostLiked={true} wishListed={true} />


            < Flat src='./flat1.jpg' viewsCount='411,172' starsCount='3.82' mainTitle='Sushant lok 2, gurgaon' mainDate='Apr 5 - 10' mostLiked={true} wishListed={false} />


            < Flat src='./flat2.jpg' viewsCount='12,648' starsCount='3.82' mainTitle='Rainbow Heights, HSR' mainDate='Mar 5 - 10' mostLiked={false} wishListed={true} />


            < Flat src='./flat3.jpg' viewsCount='8,402' starsCount='3.82' mainTitle='Poggibonsi, Itay' mainDate='Jun 5 - 10' mostLiked={true} wishListed={false} />

        </div>
    )
}

export default Property