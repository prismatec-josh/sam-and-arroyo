import { useImageList } from "../hooks/useImageList";
import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import Loading from "./Loading";
import { imgBaseUrl } from "../constants";

export default function GalleryList(props) {
  const { name } = props;
  const { loading, error, data } = useImageList();
  let content = "";

  if (data && !error) {
    let galleryNames = [];
    galleryNames = data
      .filter((entry) => {
        return entry.match(name + "/[^/]+/$");
      })
      .map((path) => {
        //Assumes that gallery name is only one level deep
        return path.split("/")[1];
      });

    content = galleryNames.map((galleryName) => {
      const images = data.filter((imageUrl) => {
        return imageUrl.match(galleryName);
      });
      //Grab the first image in the gallery to use as a cover pic
      const coverImage = images[1];
      return (
        <div className="GalleryListItem" key={galleryName}>
          {
            <Link to={`/gallery/${galleryName}`}>
              <ImageComponent
                url={imgBaseUrl + "\\" + coverImage}
              ></ImageComponent>
              <div className="GalleryName">{galleryName}</div>
            </Link>
          }
        </div>
      );
    });
  }

  return (
    <div className={"GalleryList"}>
      {loading && <Loading />}
      {error && <div>Error</div>}
      {data && !error && content}
    </div>
  );
}
