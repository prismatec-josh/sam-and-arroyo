import ImageComponent from "./ImageComponent";
import Loading from "./Loading";
import { imgBaseUrl } from "../constants";
import { useParams } from "react-router-dom";

import { useImageList } from "../hooks/useImageList";

export default function Gallery(props) {
  const { loading, error, data } = useImageList();
  let { galleryName } = useParams();
  const { galleryType } = props;
  let galleryClass = "";

  if (galleryType === "vertical") {
    galleryClass = "Gallery-vertical";
  } else if (galleryType === "horizontal") {
    galleryClass = "Gallery-horizontal";
  }
  //If no param from URL, failover to props for gallery name.
  if (galleryName === undefined) {
    galleryName = props.galleryName;
  }

  if (loading) return <Loading />;
  if (error) return "Sorry, it's broken...";

  const galleryImages = data.filter((url) => url.match(galleryName + "/.+"));

  return (
    <div className={galleryClass}>
      {galleryImages.map((image) => {
        return (
          <div className="GalleryItem" key={image}>
            <ImageComponent url={`${imgBaseUrl}/${image}`}></ImageComponent>
          </div>
        );
      })}
    </div>
  );
}
