import { useState } from 'react';
import logo from '../../assets/logo_netflix.svg';
import {
  ArrowDropDown,
  ArrowDropUp,
  Logout,
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Netflix Logo" className="navbar-left--logo" />
          <span className="navbar-link">Homepage</span>
          <span className="navbar-link">Series</span>
          <span className="navbar-link">Movies</span>
          <span className="navbar-link">Popular</span>
          <span className="navbar-link">My List</span>
        </div>
        <div className="navbar-right">
          <Search />
          <span className="navbar-link">KID</span>
          <Notifications />
          <img
            src={avatar}
            alt="avatar Amandine"
            className="navbar-right--avatar"
          />
          <span className="navbar-right--profile">
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
                  {/* <button>Settings</button>
                <button>Logout</button> */}
                </div>
              </>
            ) : (
              <ArrowDropDown onClick={handleClick} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
}
