import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SignIn } from "./InfinityPages/Pages/SignIn/SignIn";
import { SignUp } from "./InfinityPages/Pages/SignUp/SignUp";
import { NotFoundPage } from "./InfinityPages/Pages/NotFoundPage/NotFoundPage";
import ProtectedRoutes from "./InfinityPages/Routes/ProtectedRoutes";
import { routesData } from "./InfinityPages/Routes/routesData";
import { FileUpload } from "./ResponsiveGallery/fileUpload copy/fileUpload";
import { UserPage } from "./InfinityPages/Pages/UserPage/UserPage";

function App() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);
  console.log({ user });
  return (
    <div className="App App-header">
      {/* <ProtectedRoutes userId={user} /> */}
      <Routes>
        <Route
          path="/"
          element={
            user && <SignIn userData={userData} setUserData={setUserData} />
          }
        />
        <Route
          path="/sign-up"
          element={<SignUp userData={userData} setUserData={setUserData} />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route path="/file-upload" element={<FileUpload />} />
          <Route path="/user-account" element={<UserPage />} />
          {/* Handle other routes */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
