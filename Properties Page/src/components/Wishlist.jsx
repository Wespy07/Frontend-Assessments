import React from 'react';
import Flat from './Flat';
import properties from '../data';
import Footer from './Footer';

function Wishlist() {
  const wishListedProperties = properties.filter(property => property.wishListed);

  return (
    <div className="property-box">
      {wishListedProperties.length > 0 ? (
        wishListedProperties.map((property, index) => (
          <Flat
            key={index}
            src={property.src}
            viewsCount={property.viewsCount}
            starsCount={property.starsCount}
            mainTitle={property.mainTitle}
            mainDate={property.mainDate}
            mostLiked={property.mostLiked}
            wishListed={property.wishListed}
          />
        ))
      ) : (
        <p>No properties in the wishlist.</p>
      )}
      < Footer />
    </div>
  );
}

export default Wishlist;
