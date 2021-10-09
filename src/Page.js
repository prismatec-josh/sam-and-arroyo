import { useEffect, useState } from "react";
import ImageComponent from "./ImageComponent";
import axios from "axios";
import xml2js from "xml2js";

export default function Page(props) {
  const [pageImages, setPageImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = props;
  const imgBaseUrl = "https://samandarroyo.sfo3.cdn.digitaloceanspaces.com";
  useEffect(() => {
    getImageList();
  }, []);

  async function getImageList() {
    const res = await axios(imgBaseUrl);
    const parsedXML = await xml2js.parseStringPromise(res.data);
    const urls = parsedXML.ListBucketResult.Contents.map((i) => {
      return i.Key[0];
    });
    const filter = new RegExp(name + "/.+");
    setPageImages(urls.filter((url) => url.match(filter)));
    setLoading(false);
  }

  if (loading) return "Loading...";

  return (
    <main>
      <ol className={"Gallery"}>
        {pageImages.map((image) => {
          return (
            <li key={image}>
              <ImageComponent url={`${imgBaseUrl}/${image}`}></ImageComponent>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
