import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#top" aria-label="Back to top">
            <Image src="/AlkhaiLogoBlue.jpeg" alt="ALKHAI logo" width={120} height={36} style={{ opacity: 0.92 }} />
          </a>
          <span>© 2025 ALKHAI — Operational Process Intelligence</span>
        </div>
        <div className="footer-links">
          <a className="link-chip" href="mailto:contact@alkhai.com">contact@alkhai.com</a>
          <a className="link-chip" href="https://www.linkedin.com/company/alkhai/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a className="link-chip" href="#">Privacy</a>
          <a className="link-chip" href="#">Terms</a>
          <span className="link-chip" aria-label="copyright">© 2025 ALKHAI</span>
        </div>
      </div>
    </footer>
  );
}
