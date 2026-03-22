import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="ALKHAI Home">
          <Image src="/AlkhaiLogoBlue.jpeg" alt="ALKHAI logo" width={132} height={40} style={{ opacity: 0.95 }} priority />
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#capabilities">Capabilities</a>
          <a href="#platform">Deliverables</a>
          <a href="#scan">Bottleneck Scan</a>
          <a href="#differentiation">Why ALKHAI</a>
        </nav>

        <div className="nav-cta">
          <a className="btn ghost" href="#scan">
            <FontAwesomeIcon icon={faCirclePlay} /> How it works
          </a>
          <a className="btn primary" href="#contact">
            <FontAwesomeIcon icon={faBolt} /> Request a Scan
          </a>
        </div>
      </div>
    </header>
  );
}
