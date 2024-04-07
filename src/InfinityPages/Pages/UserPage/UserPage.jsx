import "./userPage.css";
import { FileUpload } from "../../../ResponsiveGallery/fileUpload copy/fileUpload";
import { useSelector } from "react-redux";

export function UserPage() {
  const user = useSelector((state) => state.user.userData);
  console.log({ user });
  return (
    <>
      <div className="navbar-container">
        <ul className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
        <div className="user-profile">{user?.name}</div>
      </div>
      <FileUpload />
    </>
  );
}
