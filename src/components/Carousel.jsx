import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lqixJPGDemRne3sfT-p_BBtpPvjRJ1KMPg&s",
  "https://img.tkmaxx.com/medias/3CG-UK-CLPMens-S1-NewIn-030325.jpg?context=bWFzdGVyfGltYWdlc3wyMDIyOTN8aW1hZ2UvanBlZ3xhRFprTDJneVl5OHhOVEV5TmpBek1qazNNemcxTkM4elEwZGZWVXRmUTB4UVRXVnVjMTlUTVY5T1pYZEpibDh3TXpBek1qVXVhbkJufGY1OTM5MmFkOGEwNmUwODRjNmYwZDk0MTQ5NGQ0OTJmZDU4YzkwOGVmMDNlOTZmYjRlMDk4NzIzZWIxMmVmOWM",
  "https://fashionsoulintl.com/blog/wp-content/uploads/2024/12/women-casual-clothing--1068x559.jpg.webp",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
