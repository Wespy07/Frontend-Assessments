import React, { useState } from 'react';
import Flat from './Flat';
import initialProperties from '../data';
import Footer from './Footer';
import moreProperties from '../moreData';

function Property() {
  const [properties, setProperties] = useState(initialProperties)

  
  const handleLoadMore = () => {
    setProperties((prevProperties) => [...prevProperties, ...moreProperties]);
  };

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

      <div className='load-more'>
        <button onClick={handleLoadMore}>Load More</button>
      </div>

      <Footer />
    </div>
  );
}

export default Property;
