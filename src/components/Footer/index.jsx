import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { socials, links, service, copyright } from './links';
import './footer.css';

/**
 * Footer COMPONENT
 * @returns {Reactnode}   jsx in DOM
 */
export default function Footer() {
  const location = useLocation();
  const isVideoPage = location.pathname.includes('video');

  const [string, setString] = useState(true);
  const toogle = () => setString(!string);

  return (
    <>
      {isVideoPage ? null : (
        <footer className="footer">
          <ul className="footer_socials">
            {socials.map((social) => (
              <li>
                <Link
                  key={social.label}
                  to={social.url}
                  target={social.target}
                  aria-label={social.label}
                  className={social.className}
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="footer_links-list">
            {links.map((link) => (
              <li key={link} className="footer_links-link">
                <Link key={`to ${link}`} to="" className="footer_links-to">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="footer_code">
            {service.map((label) => (
              <>
                {string ? (
                  <button key={label.string} onClick={toogle}>
                    {label.string}
                  </button>
                ) : (
                  <button key={label.number} onClick={toogle}>
                    {label.number}
                  </button>
                )}
              </>
            ))}
          </div>
          <p className="footer_copyright">{copyright}</p>
        </footer>
      )}
    </>
  );
}
