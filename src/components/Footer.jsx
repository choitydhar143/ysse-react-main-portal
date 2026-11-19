import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" to="/" aria-label="YSSE home">
            <img className="ysse-logo footer-ysse-logo" src="https://i.ibb.co/N2GZ2Cvk/logo-png-01.png" alt="YSSE — Stage of Innovation" />
          </Link>
          <p>Creating space for young people to learn, lead and build solutions for a better society.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/notices">Notices</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <Link to="/contact">Contact</Link>
          <a href="https://ysseglobal.org/" target="_blank" rel="noreferrer">YSSE official website ↗</a>
          <span>Social links can be added here.</span>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} YSSE Main Portal — student demonstration project.</div>
    </footer>
  );
}
