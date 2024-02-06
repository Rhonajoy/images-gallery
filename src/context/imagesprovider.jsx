import { createContext, useContext, useEffect, useState } from "react";
import ImagesAPI from "../services/images";

export const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const [images, setImages] = useState([]);

  const imagesAPI = new ImagesAPI();

  useEffect(() => {
    imagesAPI.getImages().then((imagesData) => {
      setImages(imagesData);
    });
   
  }, []);

  return (
    <ImagesContext.Provider value={{ images, setImages }}>
     
      {children}
    </ImagesContext.Provider>
  );
}
