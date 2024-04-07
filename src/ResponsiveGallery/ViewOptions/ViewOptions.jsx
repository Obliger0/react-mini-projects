import "./viewoption.css";

export function ViewOptions({ imageView = {}, setImageView = () => {} }) {
  function activeCarousel() {
    if (imageView.carouselView === false) {
      const newImageView = {
        carouselView: true,
        tableView: false,
        galleryView: false,
      };
      setImageView(newImageView);
    }
  }
  function activeGallery() {
    if (imageView.galleryView === false) {
      const newImageView = {
        carouselView: false,
        tableView: false,
        galleryView: true,
      };
      setImageView(newImageView);
    }
  }
  function activeTable() {
    if (imageView.tableView === false) {
      const newImageView = {
        carouselView: false,
        tableView: true,
        galleryView: false,
      };
      setImageView(newImageView);
    }
  }

  return (
    <div className="btn-container">
      <button className="btn" onClick={activeCarousel}>
        Carousel
      </button>
      <button className="btn" onClick={activeGallery}>
        Gallery
      </button>
      <button className="btn" onClick={activeTable}>
        Table
      </button>
    </div>
  );
}
