import axios from "axios";
import xml2js from "xml2js";
import { imgBaseUrl } from "../constants";
import { useState, useEffect } from "react";

const useImageList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    const getImageList = async () => {
      try {
        const res = await axios(imgBaseUrl);
        if (res.status !== 200) {
          throw new Error(`The response status is:${res.status}`);
        }
        //Digital Ocean Spaces serves an XML listing of all files in the bucket. Let's parse this and work with it.
        const parsedXML = await xml2js.parseStringPromise(res.data);
        const urls = parsedXML.ListBucketResult.Contents.map((i) => {
          return i.Key[0];
        });
        setData(urls);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getImageList();
  }, []);

  return { loading: isLoading, error, data };
};

export { useImageList };
