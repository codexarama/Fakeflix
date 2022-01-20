import logo from '../../assets/logo_netflix.svg'
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Netflix Logo" className='navbar-left--logo' />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="navbar-right"></div>
      </div>
    </nav>
  );
}
