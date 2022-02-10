import './header.css'

export default function Header({ className, style }) {
  return (
    <header className={`teaser_header ${className}`} style={style}>
      <div className="teaser_vignette"></div>
    </header>
  );
}
