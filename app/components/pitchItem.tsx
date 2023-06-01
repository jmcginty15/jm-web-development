import { Link } from "@remix-run/react";
import IconSwitch from "~/assets/iconSwitch";

export interface PitchItemProps {
  title?: string;
  description?: string;
  iconName:
    | "DEVELOPER"
    | "SCALES"
    | "DRAFTING_TOOLS"
    | "RACECAR"
    | "PHONE"
    | "THUMBS_UP";
  route?: string;
  longDescription?: string[];
}

export default function PitchItem({
  title,
  description,
  iconName,
  route,
}: PitchItemProps) {
  return (
    <div className="PitchItem">
      <div className="PitchItem-icon">
        <IconSwitch iconName={iconName} />
      </div>
      <h2 className="PitchItem-title">{title}</h2>
      <p className="PitchItem-text">{description}</p>
      <a className="PitchItem-button" href={`/about?item=${route}`}>
        Learn more
      </a>
    </div>
  );
}
