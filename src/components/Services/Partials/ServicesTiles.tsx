import servicesLinks from "../servicesLinks";

interface ServicesButtonProps {
  expanded: boolean;
}

interface IServiceLink {
  link: string;
  icon: string;
  linkTitle: string;
}

const ServicesButton: React.FC<ServicesButtonProps> = ({ expanded }) => {
  return (
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
  );
};

export default ServicesButton;
