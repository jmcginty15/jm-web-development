import { useRef } from "react";
import { Form } from "@remix-run/react";

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="ContactForm">
      <div className="ContactForm-info">
        <h2 className="ContactForm-title">Get in touch</h2>
        <h3 className="ContactForm-title">Phone</h3>
        <h6>(785) 213-1247</h6>
        <h3 className="ContactForm-title">Email</h3>
        <h6>
          <a className="ContactForm-link" href="mailto:webdev@jasonmcginty.net">
            webdev@jasonmcginty.net
          </a>
        </h6>
        <h3 className="ContactForm-title">Consultations</h3>
        <h6>
          I offer free consultations! If you're in the Tulsa area, I'd be happy
          to meet up in person to discuss your project. Otherwise, a phone call
          or video chat will work.
        </h6>
      </div>
      <Form className="ContactForm-form" method="POST">
        <h2 className="ContactForm-title">Request a free consultation</h2>
        <div className="ContactForm-upper">
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="firstName">
              First name
            </label>
            <input
              name="firstName"
              className="ContactForm-input"
              type="text"
              placeholder="John"
            />
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="lastName">
              Last name
            </label>
            <input
              name="lastName"
              className="ContactForm-input"
              type="text"
              placeholder="Smith"
            />
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              className="ContactForm-input"
              type="text"
              placeholder="john.smith@mydomain.com"
            />
          </div>
          <div className="ContactForm-grid-item">
            <label className="ContactForm-title" htmlFor="phone">
              Phone
            </label>
            <input
              name="phone"
              className="ContactForm-input"
              type="text"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        <label className="ContactForm-title" htmlFor="source">
          How did you hear about me?
        </label>
        <input
          name="source"
          className="ContactForm-input"
          type="text"
          placeholder="Internet search, referral, etc."
        />
        <label className="ContactForm-title" htmlFor="project">
          Tell me a bit about your project!
        </label>
        <textarea
          name="project"
          className="ContactForm-input"
          placeholder="I need a website for my small business!"
          rows={4}
        />
        <button className="ContactForm-button" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
}
