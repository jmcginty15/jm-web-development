import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useRef } from "react";
import portfolio from "../assets/portfolio.jpg";
import HalfBanner from "~/components/halfBanner";

import styles from "../portfolio.css";
import stylesProcessItem from "../components/processItem.css";
import stylesAboutBio from "../components/aboutBio.css";
import stylesHalfBanner from "../components/halfBanner.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: stylesProcessItem },
  { rel: "stylesheet", href: stylesAboutBio },
  { rel: "stylesheet", href: stylesHalfBanner },
];

export const meta: V2_MetaFunction = () => [
  {
    title:
      "JM Web Development LLC | Tulsa, Oklahoma | Topeka, Kansas | Portfolio",
    description:
      "Web development, SEO, and online marketing services for small businesses.",
  },
];

export default function Route() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="Portfolio">
      <HalfBanner
        photo={portfolio}
        text={"Check out some of my past projects"}
      />
      <Outlet />
    </div>
  );
}
