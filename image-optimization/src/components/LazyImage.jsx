import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

const LazyImage = ({ srcSet }) => {
  const imageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    };
  }, []);
  return (
    <>
      <picture ref={imageRef}>
        {isIntersecting ? (
          <>
            <source srcSet={srcSet.webp} type="image/webp" />
            <source srcSet={srcSet.avif} type="image/avif" />
            <img src={srcSet.fallback} alt={srcSet.alt} loading="lazy" />
          </>
        ) : (
          <>
            <div className="fallback__container"></div>
          </>
        )}
      </picture>
    </>
  );
};

LazyImage.propTypes = {
  srcSet: PropTypes.shape({
    webp: PropTypes.string.isRequired,
    avif: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default LazyImage;
