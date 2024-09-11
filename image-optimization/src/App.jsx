import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import LazyImage from "./components/LazyImage";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    let imagesCollection = [];
    for (let i = 0; i < 15; i++) {
      let image = {
        webp: `./assets/images/download(${i}).webp`,
        avif: `./assets/images/download(${i}).avif`,
        fallback: `./assets/images/download(${i}).jpeg`,
        alt: "Test image",
      };
      imagesCollection.push(image);
    }
    setImages(imagesCollection);
  }, []);

  return (
    <>
      <div className="pinterest-grid">
        {images.map((image) => (
          <LazyImage srcSet={image} key={image.webp} />
        ))}
      </div>
    </>
  );
}

export default App;
