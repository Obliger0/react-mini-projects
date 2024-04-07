// import { ImageGallery } from "../../Image Gallery/gallery";
// import { TicTac } from "../../Tic Tac Toe Game/IndexPage";
import { FileUpload } from "../../ResponsiveGallery/fileUpload copy/fileUpload";
import { UserPage } from "../Pages/UserPage/UserPage";

export const routesData = [
  { path: "/file-upload", element: <FileUpload /> },
  { path: "/user-account", element: <UserPage /> },
  //   { path: "/image-gallery", element: <ImageGallery /> },
  //   { path: "/game", element: <TicTac /> },
];
