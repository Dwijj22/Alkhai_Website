'use client';
import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faSitemap, faBullseye, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/mzdzkroe', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSuccess(true);
      form.reset();
    } catch {
      // handle error silently
    }
  };

  return (
    <section id="contact" className="section-soft reveal">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span> Contact Us</div>
            <h2>Request a Bottleneck Scan.</h2>
          </div>
          <div>
            <p className="fine" style={{ maxWidth: '60ch' }}>
              Tell us about the workflow you want to improve and where work is stalling.
              We&apos;ll respond with a scoped bottleneck scan and a data-focused plan.
            </p>
            <p className="fine" style={{ maxWidth: '60ch' }}>
              We do not sell software licenses or long-term transformation programs.
            </p>
            <p className="fine" style={{ maxWidth: '60ch' }}>
              No platform changes. Read-only access. NDA available. No long-term engagement required.
              If we don&apos;t find actionable constraints, you don&apos;t proceed.
            </p>
          </div>
        </div>

        <div className="cta-box">
          <div>
            <div className="panel soft" style={{ border: 'none', background: 'transparent', padding: 0 }}>
              <h3 style={{ marginBottom: 12 }}>What to include</h3>
              <div className="steps" style={{ marginTop: 0 }}>
                <div className="step">
                  <div className="badge"><FontAwesomeIcon icon={faBuilding} /></div>
                  <div>
                    <b>Company + team</b>
                    <p className="fine">Size, the systems involved (CRM/ERP/ticketing/spreadsheets), and stakeholders (Ops, Finance, Sales Ops, Support leadership).</p>
                  </div>
                </div>
                <div className="step">
                  <div className="badge"><FontAwesomeIcon icon={faSitemap} /></div>
                  <div>
                    <b>Process scope</b>
                    <p className="fine">Order-to-cash, support, onboarding, fulfillment, procurement, or a specific workflow.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="badge"><FontAwesomeIcon icon={faBullseye} /></div>
                  <div>
                    <b>Outcome target</b>
                    <p className="fine">Cycle time reduction, throughput increase, cost savings, fewer missed deadlines, or faster cash collection.</p>
                  </div>
                </div>
              </div>

              <p className="fine" style={{ marginTop: 14 }}>
                Prefer email? <a className="link-chip" href="mailto:contact@alkhai.com?subject=Request%20a%20Bottleneck%20Scan">contact@alkhai.com</a>{' '}
                <a className="link-chip book-cta" href="https://calendly.com/dwijravikumar/alkhai-initial-meeting" target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon icon={faCalendar} /> Book a 30-minute intro
                </a>
              </p>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" placeholder="Name" required />
            </label>
            <label>
              Work email
              <input name="email" type="email" autoComplete="email" placeholder="Work Email" required />
            </label>
            <label>
              Company
              <input name="company" type="text" autoComplete="organization" placeholder="Company" />
            </label>
            <label>
              What problem are you trying to solve?
              <textarea name="message" placeholder="What problem are you trying to solve?" />
            </label>
            <button className="btn primary" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} /> Request a Scan
            </button>
            <div className="fine">No platform changes. Read-only access. NDA available.</div>
            {success && (
              <div className="form-success show" role="status" aria-live="polite">
                Thank you, we will contact you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
