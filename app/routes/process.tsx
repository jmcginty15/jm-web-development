import type {
  LinksFunction,
  V2_MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import { useRef } from "react";
import processPhoto from "../assets/process.jpg";
import HalfBanner from "~/components/halfBanner";
import ProcessTabLayout from "~/components/processTabLayout";
import ContactForm from "~/components/contactForm";

import stylesProcessTabLayout from "../components/processTabLayout.css";
import stylesProcessItem from "../components/processItem.css";
import stylesAboutBio from "../components/aboutBio.css";
import stylesContactForm from "../components/contactForm.css";
import stylesHalfBanner from "../components/halfBanner.css";
import { useLoaderData } from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesProcessTabLayout },
  { rel: "stylesheet", href: stylesProcessItem },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "stylesheet", href: stylesContactForm },
  { rel: "stylesheet", href: stylesHalfBanner },
];

export const meta: V2_MetaFunction = () => [
  {
    title:
      "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | My Process",
    description:
      "Web development, SEO, and online marketing services for small businesses.",
  },
];

export const loader: LoaderFunction = () => {
  return {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    userId: process.env.USER_ID,
  };
};

export default function Route() {
  const formRef = useRef<HTMLDivElement>(null);
  const keys = useLoaderData();

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="Process">
      <HalfBanner
        photo={processPhoto}
        text={"What to expect when we work together"}
      />
      <ProcessTabLayout scrollToForm={scrollToForm} />
      <div ref={formRef}>
        <ContactForm keys={keys} />
      </div>
    </div>
  );
}
