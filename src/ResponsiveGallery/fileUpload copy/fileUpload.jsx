import "./fileUpload.css";
import { useState } from "react";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { Carousel } from "../carousel/Carousel";
import { ViewOptions } from "../ViewOptions/ViewOptions";
import { GalleryView } from "../GridGallery/GalleryView";
import { ImageTable } from "../Table/ImageTable";
import { uploadImageApi } from "../Api/api";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../Redux/ImageSlice";

export function FileUpload() {
  // const [image, setImage] = useState([]);
  const [disable, setDisable] = useState(true);
  const [imageView, setImageView] = useState({
    carouselView: true,
    tableView: false,
    galleryView: false,
  });

  const image = useSelector(state=>state.image)
  const dispatch = useDispatch();
  function onFileDrop(fileList) {
    dispatch(setImage(...fileList))
    // setImage([...image, ...fileList]);
    setDisable(false);
  }
  const onSave = async (file) => {
    try {
      await uploadImage(file.data);
      alert("Image uploaded successfully");
    } catch (err) {
      console.log(err);
      alert("Unable to upload image");
    }
  };
  const uploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        try {
          const data = await uploadImageApi(
            reader.result,
            image.name,
            image.size,
          );
          resolve(data);
        } catch (err) {
          reject(err);
        }
      };
    });
  };

  return (
    <div className="file-upload-container">
      <DragAndDrop title="Drop a File" onFileDrop={onFileDrop} />
      <ViewOptions setImageView={setImageView} imageView={imageView} />
      <div className="image-viewer">
        {imageView.carouselView && (
          <Carousel
            image={image}
            setImage={setImage}
            disable={disable}
            setDisable={setDisable}
            onSave={onSave}
          />
        )}
        {imageView.galleryView && <GalleryView image={image} />}
        {imageView.tableView && <ImageTable image={image} />}
      </div>
    </div>
  );
}
