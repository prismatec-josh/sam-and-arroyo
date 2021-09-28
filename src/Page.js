import { useEffect, useState } from "react";
import axios from "axios";
import xml2js from "xml2js";

export default function Page(props) {
  const [pageImages, setPageImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name, galleryType } = props;
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
      <ol className={`${galleryType}-gallery`}>
        {pageImages.map((image) => {
          return (
            <li key={image}>
              <img
                className={`${galleryType}-gallery-img`}
                src={`${imgBaseUrl}/${image}`}
                alt="film photography portrait"
                loading="lazy"
              ></img>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
