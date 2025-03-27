import React, { useEffect, useState } from "react";
import Image from "./Image";

const Corousel = () => {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
      const jsonData = await data.json();
      console.log(jsonData);
      const extractedData = await jsonData?.data?.children;
      const list = extractedData.filter((data) => data?.data?.url_overridden_by_dest.includes("jpg")).map((data) => data?.data?.url_overridden_by_dest);
      console.log(list);
      setImageData(list)
      
    };
    fetchData();
  }, []);
  return <div className="flex flex-col justify-center items-center">Image Corousel
         <Image data={imageData}/>
  </div>;
};

export default Corousel;
