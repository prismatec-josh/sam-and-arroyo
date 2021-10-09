import { useState } from "react";

export default function ImageComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = props;

  const toggleImage = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Image-container">
      <img
        src={url}
        className={"Image-small"}
        alt="film photography portrait"
        onClick={toggleImage}
        loading="lazy"
      ></img>

      {isOpen && (
        <dialog open onClick={toggleImage} className={"Image-full-dialog"}>
          <img
            src={url}
            alt="film photography portrait"
            className={"Image-full-content"}
          />
        </dialog>
      )}
    </div>
  );
}
