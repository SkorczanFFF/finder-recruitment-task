interface ServicesButtonProps {
  onClick: () => void;
  expanded: boolean;
}

const ServicesButton: React.FC<ServicesButtonProps> = ({
  onClick,
  expanded,
}) => {
  return (
    <button className="button" onClick={onClick}>
      Show {expanded ? "less" : "more"} categories
      <img
        src="/svg/arrowdown.svg"
        alt="Arrow Down"
        className={`arrow ${expanded ? "rotate-180" : ""}`}
      />
    </button>
  );
};

export default ServicesButton;
