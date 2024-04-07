import { useState } from "react";
import { useEffect } from "react";
import "./gallery.css";
import "./image.css";
export function ImageGallery() {
  const [photo, setPhoto] = useState([]);
  const [ispreview, setIspreview] = useState(false);
  async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      const newphotos = data.slice(0, 100);
    setPhoto(newphotos);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="gallery">
      {photo.map((image) => {
        return (
          <ImageComp
            image={image}
            ispreview={ispreview}
            setIspreview={setIspreview}
          />
        );
      })}
    </div>
  );
}

function ImageComp({ image = {}, ispreview, setIspreview }) {
  return (
    <img
      src={image.thumbnailUrl}
      alt="img"
      className={`image-card ${ispreview && "preview"}`}
      onClick={() => {
        if (ispreview) setIspreview(false);
        else setIspreview(true);
      }}
    />
  );
}

export function RevealImage() {
    return (
    <div className="image-box">
      <img
        src="https://imgs.search.brave.com/ic1IXdhEv9rMS0r6aRs7-W6OKfhXpP8MMJDStUJEvDA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmYmQ5OTk2/ZTI0YmM0M2MwMjgu/cG5n"
        alt="img"
        className="open-image"
      />
      <div className="cover">Hover on here to reveal image      </div>
    </div>
    );
}
 