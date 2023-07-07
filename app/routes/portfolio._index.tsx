import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { portfolioItems } from "../config";
import PortfolioItem from "../components/portfolioItem";
import stylesPortfolioItem from "../components/portfolioItem.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesPortfolioItem },
];

export default function PortfolioIndexPage() {
  return (
    <div className="Portfolio-index">
      {portfolioItems.map((item) => (
        <PortfolioItem
          key={item.id}
          title={item.title}
          url={item.url}
          description={item.description}
          photo={item.photo}
          id={item.id}
        />
      ))}
    </div>
  );
}
