import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to="/myTraining" className="title">Min Träning</Link>
      <div className='menu'>
        <img
          className='navIcon'
          src={menuOpen ? '/assets/naviconClose.png' : '/assets/navicon.png'}
          alt="Navigation Icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`}>
          <li>
            <a href='#kontakt'>CONTACT</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#tävling'>COMPETITION</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
