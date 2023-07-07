import { useNavigate } from "@remix-run/react";
import { PortfolioItem } from "~/config";

export default function PortfolioItem({
  title,
  url,
  description,
  photo,
  id,
}: PortfolioItem) {
  const navigate = useNavigate();

  const handleClick = (evt: any, id: string) => {
    if (!(evt.target instanceof HTMLAnchorElement))
      navigate(id === "your-site-here" ? "/process" : `/portfolio/${id}`);
  };

  return (
    <div className="PortfolioItem" onClick={(evt) => handleClick(evt, id)}>
      <div
        className="PortfolioItem-photo"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="PortfolioItem-content">
        <h2 className="PortfolioItem-title">{title}</h2>
        <p
          className="PortfolioItem-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
