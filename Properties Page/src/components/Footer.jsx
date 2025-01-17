import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img src="./exp.png" alt="Explore" />
      </Link>
      <Link to="/wishlist">
        <img src="./wish.png" alt="Wishlist" />
      </Link>
      <Link to="/map">
        <img src="./map.png" alt="Show Map" />
      </Link>
      <Link to="/login">
        <img src="./login.png" alt="Login" />
      </Link>
    </div>
  );
}

export default Footer;
