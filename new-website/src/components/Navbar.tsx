import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="ALKHAI Home">
          {/* Using text logo initially, can replace with image later */}
          <span className="brand-text">ALKHAI</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="#capabilities">Capabilities</Link>
          <Link href="#platform">Deliverables</Link>
          <Link href="#scan">Bottleneck Scan</Link>
          <Link href="#differentiation">Why ALKHAI</Link>
        </nav>
        <div className="nav-cta">
          <a href="#how-it-works" className="btn btn-ghost">How it works</a>
          <a href="#contact" className="btn btn-primary">Request a Scan</a>
        </div>
      </div>
    </header>
  );
};
