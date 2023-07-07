import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useRef } from "react";
import process from "../assets/process.jpg";
import ContactForm from "~/components/contactForm";
import ProcessTabLayout from "~/components/processTabLayout";

import styles from "../process.css";
import stylesProcessTabLayout from "../components/processTabLayout.css";
import stylesProcessItem from "../components/processItem.css";
import stylesAboutBio from "../components/aboutBio.css";
import stylesContactForm from "../components/contactForm.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesProcessTabLayout },
  { rel: "stylesheet", href: stylesProcessItem },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "stylesheet", href: stylesContactForm },
];

export const meta: V2_MetaFunction = () => [
  {
    title:
      "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | My Process",
    description:
      "Web development, SEO, and online marketing services for small businesses.",
  },
];

export default function Route() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="Process">
      <div
        className="Process-banner"
        style={{ backgroundImage: `url(${process})` }}
      >
        <div className="Process-overlay">
          <div className="Process-content">
            <div className="Process-title-container">
              <h1 className="Process-title">
                What to expect when we work together
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ProcessTabLayout scrollToForm={scrollToForm} />
      <div ref={formRef}>
        <ContactForm />
      </div>
    </div>
  );
}
