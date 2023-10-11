import "./styles.css";
import { useState } from "react";
import ServicesHeading from "./Partials/ServicesHeading";
import ServicesTiles from "./Partials/ServicesTiles";
import ServicesButton from "./Partials/ServicesButton";

export default function Services() {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="services">
      <div className="services__container">
        <ServicesHeading />
        <ServicesTiles expanded={expanded} />
        <ServicesButton onClick={handleClick} expanded={expanded} />
      </div>
    </div>
  );
}
