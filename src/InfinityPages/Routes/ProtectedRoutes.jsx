import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "../Pages/SignIn/SignIn";
import { routesData } from "./routesData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NotFoundPage } from "../Pages/NotFoundPage/NotFoundPage";
import { UserPage } from "../Pages/UserPage/UserPage";
import { FileUpload } from "../../ResponsiveGallery/fileUpload copy/fileUpload";

function ProtectedRoutes() {
  const userId = useSelector((state) => state.user.userData._id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route path="/user-account" element={UserPage} />
      <Route path="/file-upload" element={FileUpload} />
    </Routes>
  );
}

export default ProtectedRoutes;
