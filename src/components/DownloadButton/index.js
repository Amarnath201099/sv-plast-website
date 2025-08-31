import brochure from "../../assets/svplast_brochure.pdf";
import "./index.css";

const DownloadButton = ({ text, classNames, style }) => {
  return (
    <a
      href={brochure}
      download
      className={`download-button ${classNames}`}
      style={{ ...style }}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
