import "./styles.css";
import servicesLinks from "./servicesLinks";
import { useState } from "react";

interface IServiceLink {
  link: string;
  icon: string;
  linkTitle: string;
}

export default function Services() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="services">
      <div className="services__container">
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          Finder's team of 40+ experts will help you find the right choices in
          over 100 categories.
        </p>
        <div className={`tiles ${expanded ? "expanded" : "hidden"}`}>
          {servicesLinks.map((singleLink: IServiceLink, index: number) => (
            <a href={singleLink.link} className="tile" key={index}>
              <img
                className="tileicon"
                src={singleLink.icon}
                alt={singleLink.linkTitle}
              />
              <h3>{singleLink.linkTitle}</h3>
            </a>
          ))}
        </div>
        <button className="button" onClick={handleClick}>
          Show {expanded ? "less" : "more"} categories
          <img
            src="/svg/arrowdown.svg"
            alt="Arrow Down"
            className={`arrow ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
