import { useRecoilValue } from "recoil";
import { allImagesSelector } from "../recoil/allImages";
import { useEffect, useState } from "react";
import { filterTag } from "../recoil/filterTag";

const useImgFilter = () => {
  const images = useRecoilValue(allImagesSelector);
  const filter = useRecoilValue(filterTag);
  const [currImg, setCurrImages] = useState([]);

  useEffect(() => {
    const newImgTag = images.filter((item: any) => item.tags === filter);
    setCurrImages(newImgTag);
  }, [images, filter]);

  return currImg.length > 0
    ? { currImg: currImg, data: "data found" }
    : { currImg: [], data: "No Images Found" };
};

export default useImgFilter;
