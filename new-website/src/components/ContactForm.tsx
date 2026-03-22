"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      await fetch(formRef.current.action, {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });
      formRef.current.reset();
      setSuccess(true);
    } catch {
      // silently fail
    }
  };

  return (
    <form
      ref={formRef}
      className="form"
      id="contact-form"
      action="https://formspree.io/f/mzdzkroe"
      method="POST"
      onSubmit={handleSubmit}
    >
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
        <i className="fa-solid fa-paper-plane"></i> Request a Scan
      </button>
      <div className="fine">No platform changes. Read-only access. NDA available.</div>
      {success && (
        <div className="form-success show" role="status" aria-live="polite">
          Thank you, we will contact you soon.
        </div>
      )}
    </form>
  );
}
