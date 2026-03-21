import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <Link href="#top" aria-label="Back to top" className="brand-text">
            ALKHAI
          </Link>
          <span>© {new Date().getFullYear()} ALKHAI — Operational Process Intelligence</span>
        </div>
        <div className="footer-links">
          <a className="link-chip" href="mailto:contact@alkhai.com">contact@alkhai.com</a>
          <a className="link-chip" href="https://www.linkedin.com/company/alkhai/" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="link-chip" aria-label="copyright">© {new Date().getFullYear()} ALKHAI</span>
        </div>
      </div>
    </footer>
  );
};
