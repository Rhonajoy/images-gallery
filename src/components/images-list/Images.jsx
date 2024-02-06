import { useContext } from "react";
import { ImagesContext } from "../../context/imagesprovider";

import "./images.css";

export default function Images() {
  const { images } = useContext(ImagesContext);
  console.log(images);

  return (
    <div>
      <div>
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id}>
              {/* <p>{image.description}</p> */}

              <img src={image.urls.regular} />
            </div>
          ))}
        </div>
      </div>
      {/* : (
      <div>
        <h3>No images found</h3>
      </div>
      ) */}
    </div>
  );
}
