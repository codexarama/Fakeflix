import { useState } from 'react';
import logo from '../../assets/logo_netflix.svg';
import {menu} from './menu'

import {
  ArrowDropDown,
  ArrowDropUp,
  Notifications,
  PowerSettingsNew,
  Search,
  Tune,
} from '@mui/icons-material';
import avatar from '../../assets/avatar_amandine.png';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        <ul className="navbar-left">
          <img src={logo} alt="Netflix Logo" className="navbar-left--logo" />
          {menu.map((item) => (
            <li key={item} >{item}</li>
          ))}
        </ul>
        <div className="navbar-right">
          <Search />
          <Notifications />
          <img
            src={avatar}
            alt="avatar Amandine"
            className="navbar-right--avatar"
          />
            {isOpen ? (
              <>
                <ArrowDropUp onClick={handleClick} />
                <div className="navbar-right--options">
                  <button>
                    <PowerSettingsNew />
                  </button>
                  <button>
                    <Tune />
                  </button>
                </div>
              </>
            ) : (
              <ArrowDropDown onClick={handleClick} />
            )}
        </div>
      </div>
    </nav>
  );
}
