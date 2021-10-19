export default function ImageComponent(props) {
  const { url } = props;

  return (
    <div className="Image-container">
      <img
        src={url}
        className={"Image-element"}
        alt="film photography portrait"
        loading="lazy"
      ></img>
    </div>
  );
}
