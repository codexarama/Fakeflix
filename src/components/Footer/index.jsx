import { useState } from 'react';

import { Link } from 'react-router-dom';
import { socials, links, service, copyright } from './links';
import './footer.css';

export default function Footer() {
  const [string, setString] = useState(true);
  const toogle = () => setString(!string);

  return (
    <footer className="footer">
      <div className="footer_socials">
        {socials.map((social) => (
          <Link
            key={social.label}
            to={social.url}
            target={social.target}
            aria-label={social.label}
            className={social.className}
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <div className="footer_links">
        <ul className="footer_links-list">
          {links.map((link) => (
            <li key={link} className="footer_links-link">
              <Link to="" className="footer_links-to">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer_code">
        {service.map((label) => (
          <>
            {string ? (
              <button onClick={toogle}>{label.string}</button>
            ) : (
              <button onClick={toogle}>{label.number}</button>
            )}
          </>
        ))}
      </div>
      <p className="footer_copyright">{copyright}</p>
    </footer>
  );
}
