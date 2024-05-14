import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import ImgCard from "../components/ImgCard.tsx";

const Home = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get("http://localhost:8787/user/all");
      setImages(res.data.res);
      console.log(res.data.res);
    };
    getImages();
  }, []);
  return (
    <div className="h-screen max-w-screen">
      <Navbar />
      <div className="flex items-center justify-center py-20">
        <div className="w-1/2 mx-auto grid grid-cols-2 gap-3">
          {images.map(({ link, title, width, height }) => {
            return (
              <div className="">
                <ImgCard
                  src={link}
                  title={title}
                  width={width}
                  height={height}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
