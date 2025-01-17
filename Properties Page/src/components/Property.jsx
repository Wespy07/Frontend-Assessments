import React from 'react';
import Flat from './Flat';
import properties from '../data';
import Footer from './Footer';

function Property() {
  return (
    <div className="property-box">
      {properties.map((property) => (
        <Flat
          key={property.id}  
          id={property.id}  
          src={property.src}
          viewsCount={property.viewsCount}
          starsCount={property.starsCount}
          mainTitle={property.mainTitle}
          mainDate={property.mainDate}
          mostLiked={property.mostLiked}
          wishListed={property.wishListed}
        />
      ))}

      <Footer />
    </div>
  );
}

export default Property;
