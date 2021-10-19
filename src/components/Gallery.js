import { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
import axios from "axios";
import xml2js from "xml2js";

export default function Gallery(props) {
  const [galleryImages, setGalleryImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = props;
  const imgBaseUrl = "https://samandarroyo.sfo3.cdn.digitaloceanspaces.com";

  useEffect(() => {
    getImageList();
  }, []);

  async function getImageList() {
    const res = await axios(imgBaseUrl);
    //Digital Ocean Spaces serves an XML listing of all files in the bucket. Let's parse this and work with it.
    const parsedXML = await xml2js.parseStringPromise(res.data);
    const urls = parsedXML.ListBucketResult.Contents.map((i) => {
      return i.Key[0];
    });
    //Digital Ocean Spaces is an implementation of object storage with no actual "folders". The "folder" name is prepended to the key.
    //We take the passed down "name" prop to filter the relevant urls for the "folder" we want to display in this gallery.
    const filter = new RegExp(name + "/.+");
    setGalleryImages(urls.filter((url) => url.match(filter)));
    setLoading(false);
  }

  if (loading) return "Loading...";

  return (
    <div className={"Gallery"}>
      {galleryImages.map((image) => {
        return <ImageComponent url={`${imgBaseUrl}/${image}`}></ImageComponent>;
      })}
    </div>
  );
}
