import ImageComponent from "./ImageComponent";
import Loading from "./Loading";
import { imgBaseUrl } from "../constants";
import { useParams } from "react-router-dom";

import { useImageList } from "../hooks/useImageList";

export default function Gallery() {
  const { loading, error, data } = useImageList();
  const { galleryName } = useParams();

  if (loading) return <Loading />;
  if (error) return "Sorry, it's broken...";

  const galleryImages = data.filter((url) => url.match(galleryName + "/.+"));

  return (
    <div className={"Gallery"}>
      {galleryImages.map((image) => {
        return (
          <ImageComponent
            url={`${imgBaseUrl}/${image}`}
            key={image}
          ></ImageComponent>
        );
      })}
    </div>
  );
}
